import { useSignupMutation } from "~/Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { UserForm } from "~/components/Auth/UserForm";
import { notification } from "~/components/Common/notification";

const SignUpPage = () => {
  const [signUp] = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    signUp({
      ...data,
      login: data.login.toLowerCase(),
      carNumber: data.carNumber.toUpperCase(),
    })
      .unwrap()
      .then(() => {
        navigate("/auth/signin");
        notification("Registration success", "success");
      })
      .catch((e) => notification(e.data.message));
  };

  return <UserForm onSubmit={onSubmit} pageName="signup" />;
};
export default SignUpPage;
