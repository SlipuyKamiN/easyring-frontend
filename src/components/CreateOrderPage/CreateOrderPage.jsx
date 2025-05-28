import { Outlet, useLocation } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";
import { useEffect } from "react";
import { scrollToTop } from "~/helpers/scrollToTop";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { ConfirmSection } from "./CreateOrderPage.styled";

export const CreateOrderPage = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      <ProgressBar />
      <ConfirmSection>
        <Container>
          <Outlet />
        </Container>
      </ConfirmSection>
    </>
  );
};
