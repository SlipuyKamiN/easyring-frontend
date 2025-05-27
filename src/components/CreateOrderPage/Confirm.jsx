import { useDispatch, useSelector } from "react-redux";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import {
  ConfirmSectionWrapper,
  IconsWrapper,
  PaymentOption,
  PaymentOptionsList,
} from "./Confirm.styled";
import { PrimaryBtn } from "../Common/Button.styled";
import { useEffect } from "react";
import { updatePrice } from "~/Redux/newParcelSlice";
import { getNewParcelState } from "~/Redux/newParcelSelectors";
import {
  useCreateParcelMutation,
  useUpdatePaymentMutation,
} from "~/Redux/parcelsSlice";
import { FaApplePay, FaGooglePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { newParcelSchema } from "~/schemas/newParcelSchema";
import { useNavigate } from "react-router-dom";
import {
  InfoSections,
  MainInfoSection,
  ParticipantInfoSection,
} from "../Common/InfoSections";

export const Confirm = () => {
  const [createParcel, { data, isError, error, isLoading }] =
    useCreateParcelMutation();
  const [updatePayment] = useUpdatePaymentMutation();
  const newParcel = useSelector(getNewParcelState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mainInfo, sender, recipient, payment } = newParcel;

  useEffect(() => {
    dispatch(updatePrice({ sender, recipient, size: mainInfo.size }));
  }, [sender, recipient, mainInfo.size, dispatch]);

  console.log(data, isError, error, isLoading);

  const handleConfirm = async () => {
    newParcelSchema
      .validate(newParcel)
      .then(() => createParcel(newParcel))
      .catch(console.log);
  };

  const selectPaymentType = (paymentType) => {
    const handleDispatch = (body) => {
      updatePayment({ id: data._id, body })
        .then(() => navigate(`/tracking/${data._id}`))
        .catch(console.log);
    };

    switch (paymentType) {
      case "online":
        handleDispatch({ type: "online", isPaid: true });
        break;

      default:
        handleDispatch({ type: "cash", isPaid: false });
        break;
    }
  };

  return (
    <Section>
      <Container>
        <ConfirmSectionWrapper>
          {data?._id && !error ? (
            <PaymentOptionsList>
              <PaymentOption>
                <PrimaryBtn
                  onClick={() => {
                    selectPaymentType("online");
                  }}
                >
                  <span>Pay now</span>
                  <IconsWrapper>
                    <FaApplePay />
                    <FaGooglePay />
                    <SiVisa />
                  </IconsWrapper>
                </PrimaryBtn>
              </PaymentOption>
              <PaymentOption>
                <PrimaryBtn
                  onClick={() => {
                    selectPaymentType("cash");
                  }}
                >
                  <span>Pay later</span>
                  <span>
                    <GiReceiveMoney size={35} />
                  </span>
                </PrimaryBtn>
              </PaymentOption>
            </PaymentOptionsList>
          ) : (
            <>
              <InfoSections listTitle={"Preview of your parcel"}>
                <ParticipantInfoSection
                  participant={"Sender"}
                  data={sender}
                  edit
                />
                <MainInfoSection mainInfo={mainInfo} payment={payment} edit />
                <ParticipantInfoSection
                  participant={"Recipient"}
                  data={recipient}
                  edit
                />
              </InfoSections>

              <PrimaryBtn onClick={handleConfirm}>Confirm Pick-up</PrimaryBtn>
            </>
          )}
        </ConfirmSectionWrapper>
      </Container>
    </Section>
  );
};
