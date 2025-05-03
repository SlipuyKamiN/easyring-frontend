import { Container } from "../SharedLayout/SharedLayout.styled";

export const OrderPage = () => {
  return (
    <Container>
      <section>
        <h3>10:00-12:00</h3>
        <ul>
          <li>
            <p>Senderinfo:</p>
            <p>Name, Surname</p>
            <a>+491781515156</a>
            <a>Pick-up address</a>
          </li>
          <li>
            <p>Recipientinfo:</p>
            <p>Name, Surname</p>
            <a>+491781515156</a>
            <a>Delivery address</a>
          </li>
        </ul>

        <p>Description</p>
        <ul>
          <li>
            <button>Done</button>
          </li>
          <li>
            <button>Cancel</button>
          </li>
          <li>
            <button>Edit</button>
          </li>
        </ul>
      </section>
    </Container>
  );
};
