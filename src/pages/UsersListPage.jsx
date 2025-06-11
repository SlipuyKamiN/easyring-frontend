import { useGetAllUsersQuery } from "~/Redux/authSlice";
import {
  Container,
  Section,
} from "../components/SharedLayout/SharedLayout.styled";
import { UserCard } from "../components/UsersList/UserCard";
import { CardList } from "../components/ParcelsList/ParcelsList.styled";
import { useEffect } from "react";
import { notification } from "~/components/Common/notification";
import { LoadingSection } from "~/components/Common/LoadingSection";
import { EmptySection } from "~/components/Common/EmptySection";

const UsersListPage = () => {
  const { data, error, isLoading } = useGetAllUsersQuery("");

  useEffect(() => {
    if (error) {
      notification(error.data.message);
    }
  }, [error]);

  if (!data && isLoading) return <LoadingSection />;

  if (!data & !isLoading)
    return <EmptySection error={error.status} text={error.data.message} />;

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
