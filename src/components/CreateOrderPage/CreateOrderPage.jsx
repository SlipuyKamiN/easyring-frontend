import { Link, Outlet } from "react-router-dom";
import { Container } from "../SharedLayout/SharedLayout.styled";

export const CreateOrderPage = () => {
  return (
    <Container>
      <h2>Fill the form</h2>
      <ul>
        <li>
          <Link to="maininfo">MainInfo -</Link>
        </li>
        <li>
          <Link to="sender">Sender -</Link>
        </li>
        <li>
          <Link to="recipient">Recipient -</Link>
        </li>
        <li>
          <Link to="/createorder">Confirm</Link>
        </li>
      </ul>
      <Outlet />
    </Container>
  );
};
