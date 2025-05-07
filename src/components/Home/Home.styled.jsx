import styled from "@emotion/styled";

export const HeroSection = styled.section`
  padding: 60px 0;

  text-align: center;
`;

export const HeroTitle = styled.h1`
  max-width: 360px;
  margin: 0 auto;

  font-weight: 600;
  font-size: 36px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  @media screen and (min-width: 1200px) {
    font-size: 44px;
    line-height: 1.36;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: "HPSimplifiedLightItalic";
  font-size: 26px;
  font-weight: 300;
  text-transform: none;

  margin-bottom: 30px;
`;

export const HeroBtnsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 30px;
`;
