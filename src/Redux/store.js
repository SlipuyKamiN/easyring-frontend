import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { newParcelReducer } from "./newParcelSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { parcelsApi } from "./parcelsSlice";
import { authApi } from "./authSlice";
import { userReducer } from "./userSlice";
import { uiConfigReducer } from "./uiConfigSlice";
import { stripeApi } from "./stripeSlice";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

const uiConfigPersistConfig = {
  key: "uiConfig",
  storage,
  whitelist: ["mode", "language"],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  uiConfig: persistReducer(uiConfigPersistConfig, uiConfigReducer),
  newParcel: newParcelReducer,
  [authApi.reducerPath]: authApi.reducer,
  [parcelsApi.reducerPath]: parcelsApi.reducer,
  [stripeApi.reducerPath]: stripeApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(parcelsApi.middleware)
      .concat(stripeApi.middleware),
});

export const persistor = persistStore(store);
