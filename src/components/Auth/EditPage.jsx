import { useUpdateUserMutation } from "~/Redux/authSlice";
import { UserForm } from "./UserForm";
import { useLocation } from "react-router-dom";

export const EditPage = () => {
  const [updateUser] = useUpdateUserMutation();
  const { state } = useLocation();

  const onSubmit = (data) => {
    updateUser({
      _id: state._id,
      body: {
        ...data,
        login: data.login.toLowerCase(),
        carNumber: data.carNumber.toUpperCase(),
      },
    }).catch(console.log);
  };

  return (
    <UserForm defaultValues={state.user} onSubmit={onSubmit} pageName="edit" />
  );
};
