import { useParams } from "react-router-dom";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { useGetParcelByIdQuery } from "~/Redux/parcelsSlice";

export const ParcelPage = () => {
  const { parcelId } = useParams();
  const { data } = useGetParcelByIdQuery(parcelId);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <Container>
        <h3>{data._id}</h3>
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
      </Container>
    </Section>
  );
};
