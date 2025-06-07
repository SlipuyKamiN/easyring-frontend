import { format } from "date-fns";
import {
  AddressList,
  AddressListItem,
  InfoSection,
  InfoSectionsList,
  ListTitle,
  SectionTitle,
} from "./InfoSections.styled";
import { CiEdit } from "react-icons/ci";
import { getGoogleMapsLink } from "~/helpers/getGoogleMaps";
import { useTranslation } from "react-i18next";

export const InfoSections = ({ children, listTitle }) => {
  return (
    <InfoSectionsList>
      <ListTitle>{listTitle}</ListTitle>
      {children}
    </InfoSectionsList>
  );
};

export const MainInfoSection = ({
  mainInfo: {
    size = "not selected",
    date = "not selected",
    startTime = "00:00",
    endTime = "00:00",
    distance = 0,
  },
  payment: { price },
  edit = false,
}) => {
  const { t } = useTranslation();

  return (
    <InfoSection>
      {edit ? (
        <SectionTitle to={"/createorder/maininfo"}>
          {t("form.parcel")} <CiEdit size={20} />
        </SectionTitle>
      ) : (
        <SectionTitle>{t("form.parcel")}</SectionTitle>
      )}
      <AddressList>
        <AddressListItem>
          <p>{t("form.preview.size")}</p>
          <b>{size}</b>
        </AddressListItem>
        <AddressListItem>
          <p>{t("form.preview.date")}</p>
          <b>{format(date, "dd.MM.yyyy")}</b>
        </AddressListItem>
        <AddressListItem>
          <p>{t("form.preview.time")}</p>
          <b>{format(startTime, "HH:mm")}</b>
          {" — "}
          <b>{format(endTime, "HH:mm")}</b>
        </AddressListItem>
        <AddressListItem>
          <p>{t("form.preview.distance")}</p>
          <b>{distance} km</b>
        </AddressListItem>
        <AddressListItem>
          <p>{t("form.preview.price")}</p>
          <b>{price} EUR</b>
        </AddressListItem>
      </AddressList>
    </InfoSection>
  );
};

export const ParticipantInfoSection = ({
  participant,
  data: { phone, name, email = "", address = {}, comment },
  edit = false,
}) => {
  const { t } = useTranslation();

  return (
    <InfoSection>
      {edit ? (
        <SectionTitle to={`/createorder/${participant.toLowerCase()}`}>
          {t(`form.${participant}`)} <CiEdit size={20} />
        </SectionTitle>
      ) : (
        <SectionTitle>{t(`form.${participant}`)}</SectionTitle>
      )}
      <address>
        <AddressList>
          <AddressListItem>
            <a href={`tel:${phone}`}>{phone}</a>
          </AddressListItem>
          <AddressListItem>
            <h5>{name}</h5>
          </AddressListItem>

          <AddressListItem>
            <a
              href={getGoogleMapsLink(address?.properties?.formatted)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {address?.properties?.formatted}
            </a>
          </AddressListItem>
          {email && (
            <AddressListItem>
              <a href={`mailto:${email}`}>{email}</a>
            </AddressListItem>
          )}
          <AddressListItem>
            <p>{comment}</p>
          </AddressListItem>
        </AddressList>
      </address>
    </InfoSection>
  );
};
