import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "./i18n";
import App from "./components/App/App.jsx";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ThemeProvider } from "./components/Common/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </StrictMode>
);
