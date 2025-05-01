import { Container } from "~/components/SharedLayout/SharedLayout.styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Container>
        <Link to={"/"}>easyRing ↺</Link>
      </Container>
    </header>
  );
};
