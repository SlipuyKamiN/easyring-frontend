import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserState } from "~/Redux/selectors";

const RestrictedRoute = ({ element, redirectTo = "/user/parcels" }) => {
  const { isLoggedIn } = useSelector(getUserState);

  return !isLoggedIn ? element : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
