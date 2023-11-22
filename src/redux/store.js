import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //     middleware, which is responsible for checking whether the state is serializable before each action dispatch.
      serializableCheck: false,
    }),
});
