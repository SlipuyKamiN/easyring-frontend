import { Outlet } from "react-router-dom";
import { ProgressBar } from "~/components/CreateOrder/ProgressBar";
import { Container } from "~/components/SharedLayout/SharedLayout.styled";
import { ConfirmSection } from "~/pages/CreateOrderPage.styled";

const CreateOrderPage = () => {
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

export default CreateOrderPage;
