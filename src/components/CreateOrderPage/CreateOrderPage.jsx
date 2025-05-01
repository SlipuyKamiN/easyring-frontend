import { Outlet } from "react-router-dom";
import { Container } from "../SharedLayout/SharedLayout.styled";

export const CreateOrderPage = () => {
  return (
    <Container>
      CreateOrderPage
      <Outlet />
    </Container>
  );
};
