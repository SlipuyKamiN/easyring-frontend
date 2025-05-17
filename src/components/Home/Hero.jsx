import {
  HeroBtnsList,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  TrackInput,
  TrackInputWrapper,
} from "./Hero.styled";
import {
  HeroMainBtn,
  HeroSecondaryBtn,
  PrimaryBtnLink,
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
            <HeroMainBtn to={"createorder/maininfo"}>
              Create pick-up
            </HeroMainBtn>
          </li>
          {!inputVisible && (
            <li>
              <HeroSecondaryBtn onClick={() => setInputVisible(!inputVisible)}>
                Track parcel
              </HeroSecondaryBtn>
            </li>
          )}
          {inputVisible && (
            <TrackInputWrapper>
              <TrackInput
                type="number"
                id="orderID"
                placeholder="Track by Parcel ID"
                autoFocus
              />
              <PrimaryBtnLink to={"orders/1"}>
                <FaSearch size={20} />
              </PrimaryBtnLink>
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
