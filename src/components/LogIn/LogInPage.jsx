import { Container } from "../SharedLayout/SharedLayout.styled";

export const LogInPage = () => {
  return (
    <Container>
      <form>
        <ul>
          <li>
            <label htmlFor="login">
              <input type="text" />
            </label>
          </li>
          <li>
            <label htmlFor="password">
              <input type="password" />
            </label>
          </li>
        </ul>
        <button type="submit">login</button>
      </form>
    </Container>
  );
};
