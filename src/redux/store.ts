import { configureStore } from "@reduxjs/toolkit";
import codes from "./codes/reducer";

const store = configureStore({
  reducer: { codes },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }).concat(),
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
