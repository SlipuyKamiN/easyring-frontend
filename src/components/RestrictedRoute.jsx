import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserState } from "~/Redux/userSelectors";

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/user/parcels",
}) => {
  const { isLoggedIn } = useSelector(getUserState);

  return !isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
