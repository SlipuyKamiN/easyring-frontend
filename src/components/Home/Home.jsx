import { Link } from "react-router-dom";
import { Container } from "../SharedLayout/SharedLayout.styled";
import {
  HeroBtnsList,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
} from "./Home.styled";
import { BtnLink, SecondaryBtnLink } from "../Common/Button.styled";

export const Home = () => {
  return (
    <Container>
      <HeroSection>
        <HeroTitle>Same day delivery</HeroTitle>
        <HeroSubtitle>in Berlin</HeroSubtitle>
        <HeroBtnsList>
          <li>
            <BtnLink to={"createorder/maininfo"}>Create order</BtnLink>
          </li>
          <li>
            <SecondaryBtnLink to={"orders/1"}>Track order</SecondaryBtnLink>
          </li>
          <li>
            <label htmlFor="orderID">Track order by ID:</label>
            <input type="text" id="orderID" />
            <button type="submit">Track</button>
          </li>
        </HeroBtnsList>
      </HeroSection>
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
