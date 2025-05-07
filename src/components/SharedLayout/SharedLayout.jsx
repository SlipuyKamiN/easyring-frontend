import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { NavBar } from "./NavBar";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        {/* <NavBar /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
