import { useDispatch, useSelector } from "react-redux";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import {
  AddressList,
  AddressListItem,
  ConfirmBtnsList,
  ConfirmSectionWrapper,
  ImportantDetails,
  InfoSection,
  InfoSectionsList,
  ListTitle,
  SectionTitle,
} from "./Confirm.styled";
import { format } from "date-fns";
import { CiEdit } from "react-icons/ci";
import { PrimaryBtn, PrimaryBtnLink } from "../Common/Button.styled";
import { useEffect, useState } from "react";
import { updatePrice } from "~/Redux/newParcelSlice";

const GoogleMapsLink = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

const GoogleMapsGetDirections = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

export const Confirm = () => {
  const dispatch = useDispatch();
  const { mainInfo, sender, recipient, tracking, payment } = useSelector(
    (state) => state.newParcel
  );
  const [paid, setPaid] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    dispatch(updatePrice({ sender, recipient, size: mainInfo.size }));
  }, [sender, recipient, mainInfo.size, dispatch]);

  return (
    <Section>
      <Container>
        <ConfirmSectionWrapper>
          <InfoSectionsList>
            <ListTitle>Preview of your parcel: {tracking.id}</ListTitle>
            <InfoSection>
              <SectionTitle to={"/createorder/sender"}>
                Sender's info: <CiEdit size={20} />
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
                      href={GoogleMapsLink(
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
                Parcel info: <CiEdit size={20} />
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
                  <ImportantDetails>{mainInfo.distance} km</ImportantDetails>
                </AddressListItem>
                <AddressListItem>
                  <p>Delivery price: </p>
                  <ImportantDetails>
                    {/* {calculatePrice(distance, mainInfo.size)} EUR */}
                    {payment.price} EUR
                  </ImportantDetails>
                </AddressListItem>
              </AddressList>
            </InfoSection>
            <InfoSection>
              <SectionTitle to={"/createorder/recipient"}>
                Recipient info: <CiEdit size={20} />
              </SectionTitle>
              <address>
                <AddressList>
                  <AddressListItem>
                    <a href={`tel:${recipient.phone}`}>{recipient.phone}</a>
                  </AddressListItem>
                  <AddressListItem>
                    <h5>{recipient.name}</h5>
                  </AddressListItem>{" "}
                  <AddressListItem>
                    <a
                      href={GoogleMapsLink(
                        recipient.address?.properties?.formatted
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {recipient.address?.properties?.formatted}
                    </a>
                  </AddressListItem>{" "}
                  <AddressListItem>
                    <p>{recipient.comment}</p>
                  </AddressListItem>{" "}
                </AddressList>
              </address>
            </InfoSection>
          </InfoSectionsList>
          <ConfirmBtnsList>
            {!isApplied && (
              <li>
                <PrimaryBtn onClick={() => setIsApplied(true)}>
                  Apply
                </PrimaryBtn>
              </li>
            )}
            {isApplied && !paid && (
              <>
                <li>
                  <PrimaryBtnLink onClick={() => setPaid(true)}>
                    Pay now
                  </PrimaryBtnLink>
                </li>
                <li>
                  <PrimaryBtnLink onClick={() => setPaid(true)}>
                    Pay later
                  </PrimaryBtnLink>
                </li>
              </>
            )}
            {isApplied && paid && (
              <li>
                <PrimaryBtn>Confirm Pick-up</PrimaryBtn>
              </li>
            )}
          </ConfirmBtnsList>
        </ConfirmSectionWrapper>
      </Container>
    </Section>
  );
};
