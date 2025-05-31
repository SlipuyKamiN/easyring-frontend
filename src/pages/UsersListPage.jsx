import { useGetAllUsersQuery } from "~/Redux/authSlice";
import {
  Container,
  Section,
} from "../components/SharedLayout/SharedLayout.styled";
import { UserCard } from "../components/UsersList/UserCard";
import { CardList } from "../components/ParcelsList/ParcelsList.styled";

const UsersListPage = () => {
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

export default UsersListPage;
