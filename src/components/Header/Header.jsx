import {
  DarkModeToggler,
  HeaderWrapper,
  PageHeader,
  UiConfigWrapper,
} from "./Header.styled";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { NavSelect } from "../SharedLayout/NavSelect";
import { PageLogo } from "../Common/PageLogo";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { LangToggler } from "../SharedLayout/LangToggler";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "~/Redux/uiConfigSlice";
import { getUiConfigState } from "~/Redux/selectors";

export const Header = () => {
  const { mode } = useSelector(getUiConfigState);
  const dispatch = useDispatch();
  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>
          <PageLogo />
          <NavSelect />
          <UiConfigWrapper>
            <LangToggler />
            <DarkModeToggler
              onClick={() => dispatch(toggleDarkMode())}
              className="darkMode"
            >
              {mode === "dark" ? (
                <BsSun size={20} />
              ) : (
                <BsMoonStars size={20} />
              )}
            </DarkModeToggler>
          </UiConfigWrapper>
        </HeaderWrapper>
      </Container>
    </PageHeader>
  );
};
