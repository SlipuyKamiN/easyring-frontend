import { Link } from "react-router-dom";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { FormWrapper } from "./CreateOrderPage.styled";

export const Sender = () => {
  return (
    <Section>
      <Container>
        <FormWrapper>
          <h3>Sender info:</h3>
          <ul>
            <li>
              <label htmlFor="">
                Phone number:
                <input type="text" />
              </label>
            </li>
            <li>
              <label htmlFor="">
                Name, Surname:
                <input type="text" />
              </label>
            </li>
            <li>
              <label htmlFor="">
                Full address:
                <input type="text" />
              </label>
            </li>
            <li>
              <label htmlFor="">
                Email:
                <input type="text" />
              </label>
            </li>
            <li>
              <label htmlFor="">
                Comment:
                <input type="text" placeholder="doorbell/company/entrance" />
              </label>
            </li>
          </ul>
          <ul>
            <li>
              <Link>{"<="}</Link>
            </li>
            <li>
              <Link>{"=>"}</Link>
            </li>
          </ul>
        </FormWrapper>
      </Container>
    </Section>
  );
};
