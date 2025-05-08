import { Container } from "../SharedLayout/SharedLayout.styled";
import {
  HeroBtnsList,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  TrackInput,
  TrackInputWrapper,
} from "./Home.styled";
import {
  BtnLink,
  SecondaryBtn,
  SecondaryBtnLink,
} from "../Common/Button.styled";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const Home = () => {
  const [inputVisible, setInputVisible] = useState(false);

  return (
    <Container>
      <HeroSection>
        <HeroTitle>Same day delivery</HeroTitle>
        <HeroSubtitle>in Berlin</HeroSubtitle>
        <HeroBtnsList>
          <li>
            <BtnLink to={"createorder/maininfo"}>Create order</BtnLink>
          </li>
          {!inputVisible && (
            <li>
              <SecondaryBtn onClick={() => setInputVisible(!inputVisible)}>
                Track order
              </SecondaryBtn>
            </li>
          )}
          {inputVisible && (
            <TrackInputWrapper>
              <TrackInput
                type="text"
                id="orderID"
                placeholder="Track by ID#132"
              />
              <SecondaryBtnLink to={"orders/1"}>
                <FaSearch size={16} />
              </SecondaryBtnLink>
            </TrackInputWrapper>
          )}
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
