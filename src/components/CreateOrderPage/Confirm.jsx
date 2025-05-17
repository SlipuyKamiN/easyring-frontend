import { useSelector } from "react-redux";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { FormWrapper } from "./CreateOrderPage.styled";

export const Confirm = () => {
  const newParcel = useSelector((state) => state.newParcel);

  console.log(newParcel);

  return (
    <Section>
      <Container>
        <FormWrapper>Confirm</FormWrapper>
      </Container>
    </Section>
  );
};
