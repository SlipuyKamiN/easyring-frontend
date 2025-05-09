import {
  HeroBtnsList,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  TrackInput,
  TrackInputWrapper,
} from "./Hero.styled";
import {
  BtnLink,
  SecondaryBtn,
  SecondaryBtnLink,
} from "../Common/Button.styled";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { IconLink } from "../Footer/Footer.styled";

export const Hero = () => {
  const [inputVisible, setInputVisible] = useState(false);
  return (
    <HeroSection>
      <Container>
        <HeroTitle>
          S<span>a</span>m<span>e</span> d<span>a</span>y d<span>e</span>liv
          <span>e</span>ry
        </HeroTitle>
        <HeroSubtitle>in Berlin</HeroSubtitle>
        <HeroBtnsList>
          <li>
            <BtnLink to={"createorder/maininfo"}>Create pick-up</BtnLink>
          </li>
          {!inputVisible && (
            <li>
              <SecondaryBtn onClick={() => setInputVisible(!inputVisible)}>
                Track parcel
              </SecondaryBtn>
            </li>
          )}
          {inputVisible && (
            <TrackInputWrapper>
              <TrackInput
                type="text"
                id="orderID"
                placeholder="Track by Parcel ID"
                autoFocus
              />
              <SecondaryBtnLink to={"orders/1"}>
                <FaSearch size={16} />
              </SecondaryBtnLink>
            </TrackInputWrapper>
          )}
        </HeroBtnsList>
        <IconLink href="#how-it-works">
          <RiArrowDownWideFill size={50} />
        </IconLink>
      </Container>
    </HeroSection>
  );
};
