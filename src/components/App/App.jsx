import { Route, Routes, useLocation } from "react-router-dom";
import { Sender } from "~/components/CreateOrder/Sender";
import { MainInfo } from "~/components/CreateOrder/MainInfo";
import { Recipient } from "~/components/CreateOrder/Recipient";
import { Confirm } from "~/components/CreateOrder/Confirm";
import { lazy, useEffect } from "react";
import { scrollToTop } from "~/helpers/scrollToTop";
import SharedLayout from "~/components/SharedLayout/SharedLayout";
import Home from "~/pages/Home";
import CreateOrderPage from "~/pages/CreateOrderPage";
import ParcelPage from "~/pages/ParcelPage";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import { useCurrentUserQuery } from "~/Redux/authSlice";
import { getUserState } from "~/Redux/userSelectors";
import { useSelector } from "react-redux";
const ParcelsPage = lazy(() => import("../../pages/ParcelsPage"));
const SignInPage = lazy(() => import("~/pages/SignInPage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage"));
const UsersListPage = lazy(() => import("~/pages/UsersListPage"));
const EditPage = lazy(() => import("../../pages/EditPage"));
const MapPage = lazy(() => import("~/pages/MapPage"));
const SettingsPage = lazy(() => import("~/pages/SettingsPage"));

const App = () => {
  const location = useLocation();
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { isLoading } = useCurrentUserQuery("", { skip });

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  console.log("hello");

  if (isLoading) return <div>Singing in...</div>;

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="createorder" element={<CreateOrderPage />}>
          <Route path="maininfo" element={<MainInfo />}></Route>
          <Route path="sender" element={<Sender />}></Route>
          <Route path="recipient" element={<Recipient />}></Route>
          <Route path="confirm" element={<Confirm />}></Route>
        </Route>
        <Route path="tracking/:parcelId" element={<ParcelPage />}></Route>
        <Route path="auth">
          <Route
            path="signin"
            element={<RestrictedRoute element={<SignInPage />} />}
          ></Route>
          <Route
            path="signup"
            element={<RestrictedRoute element={<SignUpPage />} />}
          ></Route>
          <Route
            path="edit"
            element={
              <PrivateRoute
                element={<EditPage />}
                roles={["admin", "driver"]}
              />
            }
          ></Route>
        </Route>
        <Route path="user">
          <Route
            path="parcels"
            element={
              <PrivateRoute
                element={<ParcelsPage />}
                roles={["admin", "driver"]}
              />
            }
          ></Route>
          <Route
            path="users"
            redirectTo="user/parcels"
            element={
              <PrivateRoute element={<UsersListPage />} roles={["admin"]} />
            }
          ></Route>
          <Route
            path="map"
            redirectTo="user/parcels"
            element={<PrivateRoute element={<MapPage />} roles={["admin"]} />}
          ></Route>
          <Route
            path="settings"
            redirectTo="user/parcels"
            element={
              <PrivateRoute element={<SettingsPage />} roles={["admin"]} />
            }
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
