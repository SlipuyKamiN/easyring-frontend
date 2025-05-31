import { useState } from "react";
import { DarkModeToggler, HeaderWrapper, PageHeader } from "./Header.styled";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { NavSelect } from "../SharedLayout/NavSelect";
import { PageLogo } from "../Common/PageLogo";
import { Container } from "../SharedLayout/SharedLayout.styled";

export const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>
          <PageLogo />
          <NavSelect />
          <DarkModeToggler onClick={toggleDarkMode} className="darkMode">
            {isDarkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
          </DarkModeToggler>
        </HeaderWrapper>
      </Container>
    </PageHeader>
  );
};
