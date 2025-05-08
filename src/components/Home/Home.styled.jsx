import styled from "@emotion/styled";
import { transition } from "~/styles/common/vars";

export const HeroSection = styled.section`
  padding: 60px 0;

  text-align: center;
`;

export const HeroTitle = styled.h1`
  max-width: 360px;
  margin: 0 auto;

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
