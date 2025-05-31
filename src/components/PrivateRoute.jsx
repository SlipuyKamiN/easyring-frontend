import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useCurrentUserQuery } from "~/Redux/authSlice";
import { getUserState } from "~/Redux/userSelectors";

const PrivateRoute = ({ element, redirectTo = "/auth/signin", roles = [] }) => {
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { data, isLoading, isError } = useCurrentUserQuery("", { skip });

  if (user.isLoggedIn && data && roles.includes(user.role)) return element;

  if (isError || (!user.isLoggedIn && !user.token))
    return <Navigate to={redirectTo} />;

  if (!roles.includes(user.role)) return <Navigate to={redirectTo} />;

  if (isLoading) return <div>Loading spinner...</div>;

  return <div>Loading spinner...</div>;
};

export default PrivateRoute;
