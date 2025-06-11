import { useParams } from "react-router-dom";
import {
  Container,
  Section,
} from "~/components/SharedLayout/SharedLayout.styled";
import { useGetParcelByIdQuery } from "~/Redux/parcelsSlice";
import { ConfirmSectionWrapper } from "~/components/CreateOrder/Confirm.styled";
import {
  BarcodeLabel,
  DateWrapper,
  TrackingItem,
  TrackingList,
} from "~/pages/ParcelPage.styled";
import { format } from "date-fns";
import {
  InfoSection,
  InfoSectionsList,
  SectionTitle,
} from "~/components/Common/InfoSections.styled";
import {
  MainInfoSection,
  ParticipantInfoSection,
} from "~/components/Common/InfoSections";
import { useSelector } from "react-redux";
import { getUserState } from "~/Redux/selectors";
import { SocialsLinks } from "~/components/Common/SocialsLinks";
import { statuses } from "~/data/parcelStatuses";
import { useTranslation } from "react-i18next";
import { LoadingSection } from "~/components/Common/LoadingSection";
import { EmptySection } from "~/components/Common/EmptySection";

const ParcelPage = () => {
  const { t } = useTranslation();
  const { parcelId } = useParams();
  const { data, isLoading, error } = useGetParcelByIdQuery(parcelId);
  const { isLoggedIn } = useSelector(getUserState);

  if (!data && isLoading) {
    return <LoadingSection />;
  }

  return !data && !isLoading ? (
    <EmptySection error={error.status} text={error.data.message} homeLink />
  ) : (
    <Section>
      <Container>
        <ConfirmSectionWrapper>
          <InfoSectionsList>
            <li>
              <BarcodeLabel value={data._id} background="none" height={50} />
              <TrackingList>
                {data.tracking.history.map(({ status, date }) => (
                  <TrackingItem key={status}>
                    <div>
                      <p>{t(`tracking.${statuses[status]}`)}</p>
                      <DateWrapper>
                        <span>{format(date, "dd MMMM")}</span>
                        <span>{format(date, "HH:mm")}</span>
                      </DateWrapper>
                    </div>
                  </TrackingItem>
                ))}
              </TrackingList>
            </li>
            <MainInfoSection mainInfo={data.mainInfo} payment={data.payment} />
            {isLoggedIn ? (
              <>
                <ParticipantInfoSection
                  participant="Sender"
                  data={data.sender}
                />
                <ParticipantInfoSection
                  participant="Recipient"
                  data={data.recipient}
                />
              </>
            ) : (
              <InfoSection>
                <SectionTitle>{t("tracking.contact")}</SectionTitle>
                <SocialsLinks />
              </InfoSection>
            )}
          </InfoSectionsList>
        </ConfirmSectionWrapper>
      </Container>
    </Section>
  );
};

export default ParcelPage;
