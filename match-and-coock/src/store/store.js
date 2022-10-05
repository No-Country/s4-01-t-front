import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth";
import likesSlice from "../features/likes";
import matchSlice from "../features/matchs";

export const store = configureStore({
  reducer: { auth: authSlice, matchs: matchSlice, likes: likesSlice },
});
