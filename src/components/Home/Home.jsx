import { Link } from "react-router-dom";
import { Container } from "../SharedLayout/SharedLayout.styled";

export const Home = () => {
  return (
    <Container>
      <section>
        <h1>Same day delivery</h1>
        <ul>
          <li>
            <Link to={"createorder/maininfo"}>Create order</Link>
          </li>
          <li>
            <label htmlFor="orderID">Track order by ID:</label>
            <input type="text" id="orderID" />
            <button type="submit">Track</button>
          </li>
        </ul>
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam molestiae reiciendis neque enim ipsum consequuntur corporis.
          Suscipit hic incidunt consectetur sed qui ipsam magni nobis nulla!
          Est, placeat. Culpa? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Aperiam itaque voluptatem repellendus accusantium
          aliquid eos perspiciatis pariatur laudantium id deleniti numquam totam
          esse provident facilis blanditiis aut, qui ea similique.
        </p>
      </section>
    </Container>
  );
};
