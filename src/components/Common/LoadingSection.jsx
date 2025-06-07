import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { ImSpinner2 } from "react-icons/im";
import { SpinnerWrapper } from "./LoadingSection.styled";

export const LoadingSpinner = ({ size = 20 }) => (
  <SpinnerWrapper>
    <ImSpinner2 size={size} />
  </SpinnerWrapper>
);

export const LoadingSection = () => {
  return (
    <Section>
      <Container>
        <LoadingSpinner size={40} />
      </Container>
    </Section>
  );
};
