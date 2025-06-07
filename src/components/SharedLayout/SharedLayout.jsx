import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { RootWrapper } from "./SharedLayout.styled";
import { Suspense } from "react";
import { LoadingSection } from "../Common/LoadingSection";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { getTheme } from "~/styles/common/theme";
import { getUiConfigState } from "~/Redux/selectors";

const getMuiTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
  });

const SharedLayout = () => {
  const { mode } = useSelector(getUiConfigState);
  const emotionTheme = getTheme(mode);
  const muiTheme = getMuiTheme(mode);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={emotionTheme}>
        <RootWrapper>
          <Header />
          <main>
            <Suspense fallback={<LoadingSection />}>
              <Outlet />
            </Suspense>
          </main>
          <Footer />
        </RootWrapper>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};

export default SharedLayout;
