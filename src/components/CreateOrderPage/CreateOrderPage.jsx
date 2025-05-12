import { Outlet } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";

export const CreateOrderPage = () => {
  return (
    <>
      <ProgressBar />
      <Outlet />
    </>
  );
};
