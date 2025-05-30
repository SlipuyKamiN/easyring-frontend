import SharedLayout from "~/components/SharedLayout/SharedLayout";
import { Home } from "~/components/Home/Home";
import { Calendar } from "~/components/Calendar/Calendar";
import { ParcelsList } from "~/components/ParcelsList/ParcelsList";
import { UsersList } from "~/components/UsersList/UsersList";
import { Settings } from "~/components/Settings/Settings";
import { ParcelPage } from "~/components/ParcelPage/ParcelPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { CreateOrderPage } from "~/components/CreateOrderPage/CreateOrderPage";
import { Sender } from "~/components/CreateOrderPage/Sender";
import { MainInfo } from "~/components/CreateOrderPage/MainInfo";
import { Recipient } from "~/components/CreateOrderPage/Recipient";
import { SignInPage } from "~/components/Auth/SignInPage";
import { Confirm } from "../CreateOrderPage/Confirm";
import { SignUpPage } from "../Auth/SignUpPage";
import { useEffect } from "react";
import { scrollToTop } from "~/helpers/scrollToTop";
import { ParcelsPage } from "../ParcelsList/ParcelsPage";
import { useSelector } from "react-redux";
import { getUserState } from "~/Redux/userSelectors";
import { useCurrentUserQuery } from "~/Redux/authSlice";
import { EditPage } from "../Auth/EditPage";

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
          <Route path="calendar" element={<Calendar />}></Route>
          <Route path="parcels" element={<ParcelsPage />}></Route>
          <Route path="users" element={<UsersList />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
        <Route path="driver">
          <Route path="parcels" element={<ParcelsList />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
