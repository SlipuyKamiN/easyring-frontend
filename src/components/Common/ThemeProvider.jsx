import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { getTheme } from "~/styles/common/theme";
import { getUiConfigState } from "~/Redux/selectors";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

const getMuiTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
  });

export const ThemeProvider = ({ children }) => {
  const { mode } = useSelector(getUiConfigState);
  const emotionTheme = getTheme(mode);
  const muiTheme = getMuiTheme(mode);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={emotionTheme}>
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};
