import SharedLayout from "-/components/SharedLayout/SharedLayout";
import { Home } from "-/components/Home/Home";
import { Calendar } from "-/components/Calendar/Calendar";
import { OrdersList } from "-/components/OrdersList/OrdersList";
import { DriversList } from "-/components/DriversList/DriversList";
import { Settings } from "-/components/Settings/Settings";
import { OrderPage } from "-/components/OrderPage/OrderPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="admin">
          <Route path="calendar" element={<Calendar />}></Route>
          <Route path="orders" element={<OrdersList />}></Route>
          <Route path="drivers" element={<DriversList />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
        <Route path="driver">
          <Route path="/driver/orders" element={<OrdersList />}></Route>
        </Route>
        <Route path="orders/:orderId" element={<OrderPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
