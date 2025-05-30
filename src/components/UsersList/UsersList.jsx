import { useGetAllUsersQuery } from "~/Redux/authSlice";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { UserCard } from "./UserCard";
import { CardList } from "../ParcelsList/ParcelsList.styled";

export const UsersList = () => {
  const { data } = useGetAllUsersQuery("");

  if (!data) return <div>Loading users...</div>;

  return (
    <Section>
      <Container>
        <CardList>
          {data.users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </CardList>
      </Container>
    </Section>
  );
};
