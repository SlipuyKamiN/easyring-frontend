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
  display: flex;
  align-items: center;

  font-family: "Montserrat-Alt1", "Montserrat";
  font-size: 40px;
  line-height: 1;

  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  color: transparent;

  background-clip: text;
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
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 60px;
`;

export const SubLogo = styled.span`
  font-family: "Simplified Light Italic";
`;

export const DarkModeToggler = styled.button`
  background-color: transparent;
  color: ${colors.primaryAccent};
`;
