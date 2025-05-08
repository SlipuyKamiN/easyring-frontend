import styled from "@emotion/styled";
import { transition } from "~/styles/common/vars";

export const HeroSection = styled.section`
  padding: 60px 0;

  text-align: center;
`;

export const HeroTitle = styled.h1`
  max-width: 360px;
  margin: 0 auto;

  font-family: Montserrat-Alt1;

  font-weight: 600;
  font-size: 40px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  @media screen and (min-width: 1200px) {
    font-size: 52px;
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

  margin-bottom: 30px;

  line-height: 0.8;
`;

export const HeroBtnsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;

  gap: 24px;

  max-width: 220px;

  @media screen and (min-width: 768px) {
    max-width: none;
  }
`;

export const TrackInputWrapper = styled.li`
  display: flex;
  gap: 10px;
`;

export const TrackInput = styled.input`
  padding: 10px 16px;

  background-color: #dddddd66;
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
    background-color: #dddddd;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding: 10px 0;
  margin-bottom: 10px;

  background: linear-gradient(
    90deg,
    rgba(100, 100, 100, 0.4) 0%,
    rgba(100, 100, 100, 0.6) 60%,
    rgba(100, 100, 100, 0.2) 100%
  );

  color: transparent;

  background-clip: text;
`;

export const BenefitsList = styled.ul`
  max-width: 360px;
  margin: 0 auto;
  padding: 20px;
  counter-reset: benefits;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    max-width: none;
  }
`;

export const BenefitItem = styled.li`
  width: 150px;
  position: relative;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  & > svg {
    margin-left: 70px;
    margin-bottom: 10px;
  }

  h3 {
    height: 60px;
  }

  &::before {
    position: absolute;
    left: 10px;
    top: 10px;
    content: counter(benefits) ".";
    counter-increment: benefits;

    font-family: Montserrat-Alt1;
    font-size: 100px;
    font-weight: 600;
    line-height: 1;

    background: linear-gradient(
      90deg,
      rgba(100, 100, 100, 0.4) 0%,
      rgba(100, 100, 100, 0.6) 70%,
      rgba(100, 100, 100, 0.2) 100%
    );

    color: transparent;

    background-clip: text;
  }
`;
