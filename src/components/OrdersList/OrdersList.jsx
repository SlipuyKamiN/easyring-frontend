import { Container } from "../SharedLayout/SharedLayout.styled";
import { OrderCard } from "./OrderCard";

export const OrdersList = () => {
  return (
    <Container>
      <ul>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ul>
    </Container>
  );
};
