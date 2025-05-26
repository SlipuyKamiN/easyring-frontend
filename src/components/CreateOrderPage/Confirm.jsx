import { useDispatch, useSelector } from "react-redux";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import {
  AddressList,
  AddressListItem,
  ConfirmSectionWrapper,
  IconsWrapper,
  ImportantDetails,
  InfoSection,
  InfoSectionsList,
  ListTitle,
  PaymentOption,
  PaymentOptionsList,
  SectionTitle,
} from "./Confirm.styled";
import { format } from "date-fns";
import { CiEdit } from "react-icons/ci";
import { PrimaryBtn } from "../Common/Button.styled";
import { useEffect } from "react";
import { updatePrice } from "~/Redux/newParcelSlice";
import { getGoogleMapsLink } from "~/helpers/getGoogleMaps";
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
              <InfoSectionsList>
                <ListTitle>Preview of your parcel</ListTitle>
                <InfoSection>
                  <SectionTitle to={"/createorder/sender"}>
                    Sender: <CiEdit size={20} />
                  </SectionTitle>
                  <address>
                    <AddressList>
                      <AddressListItem>
                        <a href={`tel:${sender.phone}`}>{sender.phone}</a>
                      </AddressListItem>
                      <AddressListItem>
                        <h5>{sender.name}</h5>
                      </AddressListItem>

                      <AddressListItem>
                        <a
                          href={getGoogleMapsLink(
                            sender.address?.properties?.formatted
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {sender.address?.properties?.formatted}
                        </a>
                      </AddressListItem>
                      <AddressListItem>
                        <a href={`mailto:${sender.email}`}>{sender.email}</a>
                      </AddressListItem>
                      <AddressListItem>
                        <p>{sender.comment}</p>
                      </AddressListItem>
                    </AddressList>
                  </address>
                </InfoSection>
                <InfoSection>
                  <SectionTitle to={"/createorder/maininfo"}>
                    Parcel: <CiEdit size={20} />
                  </SectionTitle>
                  <AddressList>
                    <AddressListItem>
                      <p>Parcel size: </p>
                      <ImportantDetails>
                        {mainInfo.size ? mainInfo.size : "not selected"}
                      </ImportantDetails>
                    </AddressListItem>
                    <AddressListItem>
                      <p>Pick up date: </p>
                      <ImportantDetails>
                        {mainInfo.startTime
                          ? format(mainInfo.date, "dd-MM-yyyy")
                          : "not selected"}
                      </ImportantDetails>
                    </AddressListItem>
                    <AddressListItem>
                      <p>Time window: </p>
                      <ImportantDetails>
                        {mainInfo.startTime
                          ? format(mainInfo.startTime, "HH:mm")
                          : "00:00"}
                      </ImportantDetails>
                      {" — "}
                      <ImportantDetails>
                        {mainInfo.endTime
                          ? format(mainInfo.endTime, "HH:mm")
                          : "00:00"}
                      </ImportantDetails>
                    </AddressListItem>
                    <AddressListItem>
                      <p>Distance:</p>
                      <ImportantDetails>
                        {mainInfo.distance} km
                      </ImportantDetails>
                    </AddressListItem>
                    <AddressListItem>
                      <p>Delivery price: </p>
                      <ImportantDetails>{payment.price} EUR</ImportantDetails>
                    </AddressListItem>
                  </AddressList>
                </InfoSection>
                <InfoSection>
                  <SectionTitle to={"/createorder/recipient"}>
                    Recipient: <CiEdit size={20} />
                  </SectionTitle>
                  <address>
                    <AddressList>
                      <AddressListItem>
                        <a href={`tel:${recipient.phone}`}>{recipient.phone}</a>
                      </AddressListItem>
                      <AddressListItem>
                        <h5>{recipient.name}</h5>
                      </AddressListItem>
                      <AddressListItem>
                        <a
                          href={getGoogleMapsLink(
                            recipient.address?.properties?.formatted
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {recipient.address?.properties?.formatted}
                        </a>
                      </AddressListItem>
                      <AddressListItem>
                        <p>{recipient.comment}</p>
                      </AddressListItem>
                    </AddressList>
                  </address>
                </InfoSection>
              </InfoSectionsList>
              <PrimaryBtn onClick={handleConfirm}>Confirm Pick-up</PrimaryBtn>
            </>
          )}
        </ConfirmSectionWrapper>
      </Container>
    </Section>
  );
};
