import { useSelector } from "react-redux";
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
import { useEffect, useState } from "react";
import {
  PrimaryBtn,
  SecondaryBtn,
  SecondaryBtnLink,
} from "../Common/Button.styled";
import { calculateDistance } from "~/helpers/calculateDistance";
import { calculatePrice } from "~/helpers/calculatePrice";

const GoogleMapsLink = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

const GoogleMapsGetDirections = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

export const Confirm = () => {
  const { mainInfo, sender, recipient, tracking } = useSelector(
    (state) => state.newParcel
  );
  const [paid, setPaid] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    (async () => {
      setDistance(await calculateDistance(sender, recipient));
    })();
  }, [recipient, sender, setDistance]);

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
                  <p>
                    Parcel size:{" "}
                    <ImportantDetails>{mainInfo.size}</ImportantDetails>
                  </p>
                </AddressListItem>
                <AddressListItem>
                  <p>
                    Pick up date:{" "}
                    <ImportantDetails>
                      {format(mainInfo.date, "dd-MM-yyyy")}
                    </ImportantDetails>
                  </p>
                </AddressListItem>
                <AddressListItem>
                  <p>
                    Time window:{" "}
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
                  </p>
                </AddressListItem>
                <AddressListItem>
                  <p>
                    Distance: <ImportantDetails>{distance} km</ImportantDetails>
                  </p>
                </AddressListItem>
                <AddressListItem>
                  <p>
                    Price:{" "}
                    <ImportantDetails>
                      {calculatePrice(distance)} EUR
                    </ImportantDetails>
                  </p>
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
                <SecondaryBtn onClick={() => setIsApplied(true)}>
                  Apply
                </SecondaryBtn>
              </li>
            )}
            {isApplied && !paid && (
              <>
                <li>
                  <SecondaryBtnLink onClick={() => setPaid(true)}>
                    Pay now
                  </SecondaryBtnLink>
                </li>
                <li>
                  <SecondaryBtnLink onClick={() => setPaid(true)}>
                    Pay later
                  </SecondaryBtnLink>
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
