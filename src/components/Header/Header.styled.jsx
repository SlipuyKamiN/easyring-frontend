import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "~/styles/common/vars";

export const HeaderBar = styled.header`
  width: 100%;
  position: fixed;
  padding: 0 20px;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 70px;
  backdrop-filter: blur(10px);

  border-bottom: 3px solid ${colors.primaryAccent};
  box-shadow: ${colors.primaryAccent} 0px 0px 10px;
`;

export const LogoLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;

  font-family: Montserrat-Alt1, Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 1;

  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  color: transparent;

  background-clip: text;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const FirstLetterLogo = styled.span`
  rotate: -15deg;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 600%
  );
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
  color: #000;

  @media screen and (min-width: 768px) {
    top: 42px;
    left: 28px;
    font-size: 11px;
  }
`;

export const DarkModeToggler = styled.button`
  background-color: transparent;
  color: ${colors.primaryAccent};
`;
