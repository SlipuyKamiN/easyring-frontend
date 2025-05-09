import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { RootWrapper } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <RootWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </RootWrapper>
  );
};

export default SharedLayout;
