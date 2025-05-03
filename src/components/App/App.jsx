import SharedLayout from "~/components/SharedLayout/SharedLayout";
import { Home } from "~/components/Home/Home";
import { Calendar } from "~/components/Calendar/Calendar";
import { OrdersList } from "~/components/OrdersList/OrdersList";
import { DriversList } from "~/components/DriversList/DriversList";
import { Settings } from "~/components/Settings/Settings";
import { OrderPage } from "~/components/OrderPage/OrderPage";
import { Route, Routes } from "react-router-dom";
import { CreateOrderPage } from "~/components/CreateOrderPage/CreateOrderPage";
import { Sender } from "~/components/CreateOrderPage/Sender";
import { MainInfo } from "~/components/CreateOrderPage/MainInfo";
import { Recipient } from "~/components/CreateOrderPage/Recipient";
import { LogInPage } from "~/components/LogIn/LogInPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="createorder" element={<CreateOrderPage />}>
          <Route path="maininfo" element={<MainInfo />}></Route>
          <Route path="sender" element={<Sender />}></Route>
          <Route path="recipient" element={<Recipient />}></Route>
        </Route>
        <Route path="orders/:orderId" element={<OrderPage />}></Route>
        <Route path="login" element={<LogInPage />}></Route>
        <Route path="admin">
          <Route path="calendar" element={<Calendar />}></Route>
          <Route path="orders" element={<OrdersList />}></Route>
          <Route path="drivers" element={<DriversList />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
        <Route path="driver">
          <Route path="orders" element={<OrdersList />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
