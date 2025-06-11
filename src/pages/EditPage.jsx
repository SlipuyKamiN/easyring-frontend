import { useUpdateUserMutation } from "~/Redux/authSlice";
import { UserForm } from "~/components/Auth/UserForm";
import { useLocation } from "react-router-dom";
import { notification } from "~/components/Common/notification";
import { EmptySection } from "~/components/Common/EmptySection";

const EditPage = () => {
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
    })
      .then(() => notification("User updated!", "success"))
      .catch((e) => notification(e.data.message));
  };

  if (!state.user)
    return <EmptySection error={404} text="No user data!" homeLink />;

  return (
    <UserForm defaultValues={state.user} onSubmit={onSubmit} pageName="edit" />
  );
};

export default EditPage;
