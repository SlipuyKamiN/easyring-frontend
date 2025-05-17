import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { newParcelReducer } from "./newParcelSlice";

const rootReducer = combineReducers({
  newParcel: newParcelReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
