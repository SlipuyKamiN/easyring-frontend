import { Route, Routes, useLocation } from "react-router-dom";
import { getUserState } from "~/Redux/userSelectors";
import { useSelector } from "react-redux";
import { Sender } from "~/components/CreateOrder/Sender";
import { MainInfo } from "~/components/CreateOrder/MainInfo";
import { Recipient } from "~/components/CreateOrder/Recipient";
import { Confirm } from "~/components/CreateOrder/Confirm";
import { useEffect } from "react";
import { scrollToTop } from "~/helpers/scrollToTop";
import { useCurrentUserQuery } from "~/Redux/authSlice";
import SharedLayout from "~/components/SharedLayout/SharedLayout";
import Home from "~/pages/Home";
import CreateOrderPage from "~/pages/CreateOrderPage";
import ParcelPage from "~/pages/ParcelPage";
import ParcelsPage from "../../pages/ParcelsPage";
import SignInPage from "~/pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import UsersListPage from "~/pages/UsersListPage";
import EditPage from "../../pages/EditPage";
import MapPage from "~/pages/MapPage";
import SettingsPage from "~/pages/SettingsPage";

const App = () => {
  const location = useLocation();
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { isLoading } = useCurrentUserQuery("", { skip });

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  if (isLoading) return <div>Signing in...</div>;

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
          <Route path="signin" element={<SignInPage />}></Route>
          <Route path="signup" element={<SignUpPage />}></Route>
          <Route path="edit" element={<EditPage />}></Route>
        </Route>
        <Route path="admin">
          <Route path="parcels" element={<ParcelsPage />}></Route>
          <Route path="users" element={<UsersListPage />}></Route>
          <Route path="map" element={<MapPage />}></Route>
          <Route path="settings" element={<SettingsPage />}></Route>
        </Route>
        <Route path="driver">
          <Route path="parcels" element={<ParcelsPage />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
