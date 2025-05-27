import { useParams } from "react-router-dom";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { useGetParcelByIdQuery } from "~/Redux/parcelsSlice";
import { ConfirmSectionWrapper } from "../CreateOrderPage/Confirm.styled";
import {
  BarcodeLabel,
  DateWrapper,
  TrackingItem,
  TrackingList,
} from "./ParcelPage.styled";
import { format } from "date-fns";
import {
  InfoSection,
  InfoSectionsList,
  SectionTitle,
} from "../Common/InfoSections.styled";
import {
  MainInfoSection,
  ParticipantInfoSection,
} from "../Common/InfoSections";
import { useSelector } from "react-redux";
import { getUserState } from "~/Redux/userSelectors";
import { SocialsLinks } from "../Common/SocialsLinks";

const statuses = {
  100: "Created",
  200: "Confirmed",
  300: "Picked up",
  400: "Delivered",
};

export const ParcelPage = () => {
  const { parcelId } = useParams();
  const { data } = useGetParcelByIdQuery(parcelId);
  const { isLoggedIn } = useSelector(getUserState);

  console.log("loggedIn:", isLoggedIn);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
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
                      <p>{statuses[status]}</p>
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
                <SectionTitle>Questions? Contact us!</SectionTitle>
                <SocialsLinks />
              </InfoSection>
            )}
          </InfoSectionsList>
        </ConfirmSectionWrapper>
      </Container>
    </Section>
  );
};
