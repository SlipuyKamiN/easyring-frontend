import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { RootWrapper } from "./SharedLayout.styled";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <RootWrapper>
      <Header />
      <main>
        <Suspense fallback={<div>Suspense...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </RootWrapper>
  );
};

export default SharedLayout;
