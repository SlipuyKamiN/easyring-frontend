import styled from "@emotion/styled";
import { colors, transition } from "~/styles/common/vars";

export const HeroSection = styled.section`
  padding: 120px 0 60px;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 150px 0 60px;
  }
`;

export const HeroTitle = styled.h1`
  max-width: 360px;
  margin: 0 auto;

  font-family: Montserrat-Alt1;

  font-weight: 600;
  font-size: 50px;

  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  @media screen and (min-width: 1200px) {
    font-size: 60px;
    line-height: 1.36;
  }

  span {
    font-family: Montserrat;
    font-weight: 500;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: HPSimplifiedLightItalic, sans-serif;
  font-size: 26px;
  font-weight: 300;
  font-style: italic;
  text-transform: none;

  margin-bottom: 60px;

  line-height: 0.8;
`;

export const HeroBtnsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto 80px;

  gap: 24px;

  max-width: 220px;

  @media screen and (min-width: 768px) {
    max-width: none;
    margin-bottom: 0;

    & + a {
      display: none;
    }
  }
`;

export const TrackInputWrapper = styled.li`
  display: flex;
  gap: 10px;
`;

export const TrackInput = styled.input`
  padding: 10px 16px;
  height: 40px;

  background: ${colors.light.gradient};
  border: none;
  border-radius: 8px;

  font-size: 16px;

  text-transform: uppercase;

  transition: background-color ${transition.duration};

  &::placeholder {
    text-transform: none;
  }

  &:hover,
  &:focus {
    background-color: ${colors.light.gray};
  }
`;
