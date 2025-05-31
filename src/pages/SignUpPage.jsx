import { useSignupMutation } from "~/Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { UserForm } from "~/components/Auth/UserForm";

const SignUpPage = () => {
  const [signUp] = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signUp({
      ...data,
      login: data.login.toLowerCase(),
      carNumber: data.carNumber.toUpperCase(),
    })
      .then(() => {
        navigate("/auth/signin");
      })
      .catch(console.log);
  };

  return <UserForm onSubmit={onSubmit} pageName="signup" />;
};

export default SignUpPage;
