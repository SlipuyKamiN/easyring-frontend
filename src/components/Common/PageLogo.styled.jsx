import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 240px;

  font-family: Montserrat-Alt1, Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 1;

  background-image: ${({ theme }) => theme.colors.logo.main};
  color: transparent;

  background-clip: text;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const FirstLetterLogo = styled.span`
  rotate: -15deg;
  background-image: ${({ theme }) => theme.colors.logo.initCap};
  color: transparent;

  background-clip: text;
`;

export const ArrowLogo = styled.span`
  font-family: "LucidaSansUnicode";
  font-weight: 500;
  font-size: 48px;

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }
`;

export const SubLogo = styled.span`
  content: "";
  position: absolute;
  z-index: 99;
  top: 34px;
  left: 20px;

  font-family: "HPSimplifiedLightItalic";
  font-style: italic;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.lo200};

  @media screen and (min-width: 768px) {
    top: 42px;
    left: 28px;
    font-size: 11px;
  }
`;
