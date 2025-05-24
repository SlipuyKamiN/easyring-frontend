import { Outlet, useLocation } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";
import { useEffect } from "react";

export const CreateOrderPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // або 'auto' якщо без анімації
    });
  }, [location.pathname]);

  return (
    <>
      <ProgressBar />
      <Outlet />
    </>
  );
};
