import { Outlet } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { ConfirmSection } from "./CreateOrderPage.styled";

export const CreateOrderPage = () => {
  return (
    <>
      <ProgressBar />
      <ConfirmSection>
        <Container>
          <Outlet />
        </Container>
      </ConfirmSection>
    </>
  );
};
