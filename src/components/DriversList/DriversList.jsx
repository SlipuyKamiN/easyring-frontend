import { Container } from "../SharedLayout/SharedLayout.styled";
import { DriverCard } from "./DriverCard";

export const DriversList = () => {
  return (
    <Container>
      <ul>
        <li>
          <DriverCard />
        </li>
        <li>
          <DriverCard />
        </li>
        <li>
          <DriverCard />
        </li>
        <li>
          <DriverCard />
        </li>
        <li>
          <DriverCard />
        </li>
      </ul>
    </Container>
  );
};
