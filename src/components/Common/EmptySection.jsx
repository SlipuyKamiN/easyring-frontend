import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { FaListUl, FaHome } from "react-icons/fa";
import { EmptyWrapper, ErrorCode } from "./LoadingSection.styled";
import { SecondaryBtnLink } from "./Button.styled";

export const EmptySection = ({ error, text = "Empty!", homeLink = false }) => {
  return (
    <Section>
      <Container>
        <EmptyWrapper>
          {error ? <ErrorCode>{error}</ErrorCode> : <FaListUl size={80} />}
          <p>{text}</p>
          {homeLink && <SecondaryBtnLink to={"/"}>HOME PAGE</SecondaryBtnLink>}
        </EmptyWrapper>
      </Container>
    </Section>
  );
};
