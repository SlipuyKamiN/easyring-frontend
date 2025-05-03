import { useState } from "react";
import {
  ArrowLogo,
  DarkModeToggler,
  FirstLetterLogo,
  HeaderBar,
  LogoLink,
} from "./Header.styled";
import { BsMoonStars, BsSun } from "react-icons/bs";

export const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <HeaderBar>
      <LogoLink to={"/"}>
        <FirstLetterLogo>e</FirstLetterLogo>asyRing<ArrowLogo>↺</ArrowLogo>
      </LogoLink>
      <DarkModeToggler onClick={toggleDarkMode} className="darkMode">
        {isDarkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
      </DarkModeToggler>
    </HeaderBar>
  );
};
