import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { FaListUl } from "react-icons/fa";
import { EmptyWrapper } from "./LoadingSection.styled";

export const EmptySection = ({ text = "Empty!" }) => {
  return (
    <Section>
      <Container>
        <EmptyWrapper>
          <FaListUl size={80} />
          <span>{text}</span>
        </EmptyWrapper>
      </Container>
    </Section>
  );
};
