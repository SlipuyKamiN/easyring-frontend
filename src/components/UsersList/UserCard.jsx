import { RxCrossCircled } from "react-icons/rx";
import {
  Card,
  CardDetailsList,
  CardHeadingWrapper,
  CardLink,
  DeleteButton,
} from "../ParcelsList/ParcelCard.styled";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "~/Redux/authSlice";
import { RoleInput, RoleLabel, UpdateRoleRadioList } from "./UsersCard.styled";
import { useEffect, useState } from "react";

export const UserCard = ({ user }) => {
  const { _id, name, phone, email, carNumber, login, role } = user;
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [currentRole, setCurrentRole] = useState(role);

  useEffect(() => {
    if (currentRole !== role) {
      updateUser({ _id, body: { ...user, role: currentRole } });
    }
  }, [currentRole, role, user, updateUser, _id]);

  return (
    <Card>
      <CardHeadingWrapper>
        <CardLink
          to={{
            pathname: "/auth/edit",
          }}
          state={{
            _id,
            user: {
              name,
              phone,
              email,
              carNumber,
              login,
            },
          }}
        >
          <ul>
            <li>
              <h3>{carNumber}</h3>
            </li>
            <li>
              <h2>{name}</h2>
            </li>
            <li>
              <p>{login}</p>
            </li>
          </ul>
        </CardLink>
        <DeleteButton type="button" onClick={() => deleteUser(_id)}>
          <RxCrossCircled size={30} />
        </DeleteButton>
      </CardHeadingWrapper>
      <CardDetailsList>
        <li>
          <a href={`tel:${phone}`}>{phone}</a>
        </li>
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
      </CardDetailsList>
      <UpdateRoleRadioList>
        <li>
          <RoleInput
            checked={currentRole === "admin"}
            type="radio"
            name={`${login}-role`}
            value="admin"
            id={`${login}-admin`}
            onChange={({ target }) => setCurrentRole(target.value)}
          />
          <RoleLabel htmlFor={`${login}-admin`} className="left">
            Admin
          </RoleLabel>
        </li>
        <li>
          <RoleInput
            checked={currentRole === "driver"}
            type="radio"
            name={`${login}-role`}
            value="driver"
            id={`${login}-driver`}
            onChange={({ target }) => setCurrentRole(target.value)}
          />
          <RoleLabel htmlFor={`${login}-driver`}>Driver</RoleLabel>
        </li>
      </UpdateRoleRadioList>
    </Card>
  );
};
