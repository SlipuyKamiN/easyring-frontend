import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  login: "",
  phone: "",
  email: "",
  carNumber: "",
  token: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  tagTypes: ["user"],
  reducers: {
    setUser: {
      reducer(state, action) {
        state = { ...state, ...action.payload.value, isLoggedIn: true };
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    resetUser: {
      reducer(state) {
        state = initialState;
        return state;
      },
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
