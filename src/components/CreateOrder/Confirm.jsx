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
import { Checkout } from "./Checkout";
import { useGetSessionQuery } from "~/Redux/stripeSlice";
import { useSearchParams } from "react-router-dom";

export const Confirm = () => {
  const { t } = useTranslation();
  const [createParcel, { data, error, isLoading }] = useCreateParcelMutation();
  const [searchParams] = useSearchParams();
  const { data: session } = useGetSessionQuery(searchParams.get("session_id"), {
    skip: !searchParams.has("session_id"),
  });
  const newParcel = useSelector(getNewParcelState);
  const dispatch = useDispatch();
  const { mainInfo, sender, recipient, payment } = newParcel;

  useEffect(() => {
    if (session?.status === "complete" && session?.payment_status === "paid") {
      notification("Parcel paid", "success");
    }
  }, [session]);

  useEffect(() => {
    dispatch(updatePrice({ sender, recipient, size: mainInfo.size }));
  }, [sender, recipient, mainInfo.size, dispatch]);

  const handleConfirm = async () => {
    newParcelSchema
      .validate(newParcel)
      .then(() => createParcel(newParcel))
      .catch((e) => notification(e.message));
  };

  return data && !error ? (
    <Checkout data={data} />
  ) : (
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
      <ConfirmBtn onClick={handleConfirm} disabled={isLoading}>
        {t("form.preview.confirm")}
        {isLoading ? <LoadingSpinner size={16} /> : <FaCheck size={16} />}
      </ConfirmBtn>
    </ConfirmSectionWrapper>
  );
};
