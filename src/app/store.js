import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

// Configuration du magasin Redux //
export const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  })