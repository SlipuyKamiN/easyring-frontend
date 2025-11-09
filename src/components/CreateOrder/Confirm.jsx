import { useDispatch, useSelector } from "react-redux";
import { ConfirmBtn, ConfirmSectionWrapper } from "./Confirm.styled";
import { useEffect } from "react";
import { updatePrice } from "~/Redux/newParcelSlice";
import { getNewParcelState } from "~/Redux/selectors";
import { useCreateParcelMutation } from "~/Redux/parcelsSlice";
import { newParcelSchema } from "~/schemas/newParcelSchema";
import {
  InfoSections,
  MainInfoSection,
  ParticipantInfoSection,
} from "../Common/InfoSections";
import { FaCheck } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { notification } from "../Common/notification";
import { LoadingSpinner } from "../Common/LoadingSection";
import { useNavigate } from "react-router-dom";

export const Confirm = () => {
  const { t } = useTranslation();
  const [createParcel, { data, error, isLoading }] = useCreateParcelMutation();

  const newParcel = useSelector(getNewParcelState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mainInfo, sender, recipient, payment } = newParcel;

  useEffect(() => {
    dispatch(updatePrice({ sender, recipient, size: mainInfo.size }));
  }, [sender, recipient, mainInfo.size, dispatch]);

  const handleConfirm = async () => {
    newParcelSchema
      .validate(newParcel)
      .then(() => createParcel(newParcel))
      .catch((e) => notification(e.message));

    try {
      window.gtag("event", "conversion", {
        send_to: "AW-17606164650/a4_aCJ3hjqobEKqBo8tB",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data && !error && !isLoading) return navigate(`/checkout/${data._id}`);
    if (!data && error && !isLoading) notification(error?.data?.message);
  }, [data, error, isLoading, navigate]);

  return (
    <ConfirmSectionWrapper>
      <InfoSections listTitle={t("form.preview.title")}>
        <ParticipantInfoSection participant={"sender"} data={sender} edit />
        <MainInfoSection mainInfo={mainInfo} payment={payment} edit />
        <ParticipantInfoSection
          participant={"recipient"}
          data={recipient}
          edit
        />
      </InfoSections>
      <ConfirmBtn
        className="plausible-event-name=confirm"
        onClick={handleConfirm}
        disabled={isLoading}
      >
        {t("form.preview.confirm")}
        {isLoading ? <LoadingSpinner size={16} /> : <FaCheck size={16} />}
      </ConfirmBtn>
    </ConfirmSectionWrapper>
  );
};
