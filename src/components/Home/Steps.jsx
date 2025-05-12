import { StepItem, StepsList, SectionTitle } from "./Steps.styled";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsCashCoin } from "react-icons/bs";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFlagCheckered } from "react-icons/fa";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";

export const Steps = () => {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionTitle>How it works</SectionTitle>
        <StepsList>
          <StepItem>
            <HiOutlineClipboardDocumentList size={60} />
            <h3>Fill the form</h3>
            <p>
              Add parcel details, time, recipient — get your
              <b> Parcel ID</b>.
            </p>
          </StepItem>
          <StepItem>
            <BsCashCoin size={60} />
            <h3>Pay</h3>
            <p>You can pay online or when the parcel is delivered to you.</p>
          </StepItem>
          <StepItem>
            <LiaPeopleCarrySolid size={60} />
            <h3>Meet the courier</h3>
            <p>
              Match the <b>Parcel ID</b> and hand over the parcel.
            </p>
          </StepItem>
          <StepItem>
            <TbTruckDelivery size={60} />
            <h3>
              Enjoy{"  "}
              <FaFlagCheckered size={20} />
            </h3>
            <p>Receive the parcel at your preferred time and place.</p>
          </StepItem>
        </StepsList>
      </Container>
    </Section>
  );
};
