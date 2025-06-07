import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  language: "EN",
};

export const uiConfigSlice = createSlice({
  name: "uiConfig",
  initialState,
  reducers: {
    changeLanguage: {
      reducer(state, payload) {
        state = { ...state, language: payload };
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    toggleDarkMode: {
      reducer(state) {
        state = { ...state, mode: state.mode === "light" ? "dark" : "light" };
        return state;
      },
    },
  },
});

export const { changeLanguage, toggleDarkMode } = uiConfigSlice.actions;

export const uiConfigReducer = uiConfigSlice.reducer;
