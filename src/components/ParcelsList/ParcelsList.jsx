import { Container } from "../SharedLayout/SharedLayout.styled";
import { Filter } from "./Filter";
import { ParcelCard } from "./ParcelCard";

export const ParcelsList = () => {
  return (
    <>
      <Filter />
      <Container>
        <ul>
          <ParcelCard />
        </ul>
      </Container>
    </>
  );
};
