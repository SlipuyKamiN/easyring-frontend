import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { RootWrapper } from "./SharedLayout.styled";
import { Suspense } from "react";
import { LoadingSection } from "../Common/LoadingSection";

const SharedLayout = () => {
  return (
    <RootWrapper>
      <Header />
      <main>
        <Suspense fallback={<LoadingSection />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </RootWrapper>
  );
};

export default SharedLayout;
