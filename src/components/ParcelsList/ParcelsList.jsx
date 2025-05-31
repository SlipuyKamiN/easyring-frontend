import { Container } from "../SharedLayout/SharedLayout.styled";
import { ParcelCard } from "./ParcelCard";
import { CardList } from "./ParcelsList.styled";

export const ParcelsList = ({ parcels, isAdmin }) => {
  if (!parcels) return <div>No parcels</div>;

  return (
    <>
      <Container>
        <CardList>
          {parcels.map((parcel) => (
            <ParcelCard key={parcel._id} parcel={parcel} isAdmin={isAdmin} />
          ))}
        </CardList>
      </Container>
    </>
  );
};
