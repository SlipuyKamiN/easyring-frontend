import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { ImSpinner2 } from "react-icons/im";
import { SpinnerWrapper } from "./LoadingSection.styled";

export const LoadingSection = () => {
  return (
    <Section>
      <Container>
        <SpinnerWrapper>
          <ImSpinner2 size={40} />
        </SpinnerWrapper>
      </Container>
    </Section>
  );
};
