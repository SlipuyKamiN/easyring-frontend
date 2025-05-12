import { Outlet } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";

export const CreateOrderPage = () => {
  return (
    <>
      <h2>Please, fill the form</h2>
      <ProgressBar />
      <Outlet />
    </>
  );
};
