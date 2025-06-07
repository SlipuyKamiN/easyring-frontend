import { useDispatch, useSelector } from "react-redux";
import { ConfirmBtn, ConfirmSectionWrapper } from "./Confirm.styled";
import { useEffect } from "react";
import { updatePrice } from "~/Redux/newParcelSlice";
import { getNewParcelState } from "~/Redux/newParcelSelectors";
import { useCreateParcelMutation } from "~/Redux/parcelsSlice";
import { newParcelSchema } from "~/schemas/newParcelSchema";
import {
  InfoSections,
  MainInfoSection,
  ParticipantInfoSection,
} from "../Common/InfoSections";
import { FaCheck } from "react-icons/fa6";
import { Success } from "./Success";
import { useTranslation } from "react-i18next";
import { notification } from "../Common/notification";

export const Confirm = () => {
  const { t } = useTranslation();
  const [createParcel, { data, error }] = useCreateParcelMutation();
  const newParcel = useSelector(getNewParcelState);
  const dispatch = useDispatch();
  const { mainInfo, sender, recipient, payment } = newParcel;

  useEffect(() => {
    dispatch(updatePrice({ sender, recipient, size: mainInfo.size }));
  }, [sender, recipient, mainInfo.size, dispatch]);

  const handleConfirm = async () => {
    newParcelSchema
      .validate(newParcel)
      .then(() => createParcel(newParcel))
      .catch((e) => notification(e.message));
  };

  return (
    <ConfirmSectionWrapper>
      {data?._id && !error ? (
        <Success data={data} />
      ) : (
        <>
          <InfoSections listTitle={t("form.preview.title")}>
            <ParticipantInfoSection participant={"sender"} data={sender} edit />
            <MainInfoSection mainInfo={mainInfo} payment={payment} edit />
            <ParticipantInfoSection
              participant={"recipient"}
              data={recipient}
              edit
            />
          </InfoSections>
          <ConfirmBtn onClick={handleConfirm}>
            {t("form.preview.confirm")}
            <FaCheck size={16} />
          </ConfirmBtn>
        </>
      )}
    </ConfirmSectionWrapper>
  );
};
