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

export const Confirm = () => {
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
      .catch(console.log);
  };

  return (
    <ConfirmSectionWrapper>
      {data?._id && !error ? (
        <Success data={data} />
      ) : (
        <>
          <InfoSections listTitle={"Preview of your parcel"}>
            <ParticipantInfoSection participant={"Sender"} data={sender} edit />
            <MainInfoSection mainInfo={mainInfo} payment={payment} edit />
            <ParticipantInfoSection
              participant={"Recipient"}
              data={recipient}
              edit
            />
          </InfoSections>
          <ConfirmBtn onClick={handleConfirm}>
            Confirm
            <FaCheck size={16} />
          </ConfirmBtn>
        </>
      )}
    </ConfirmSectionWrapper>
  );
};
