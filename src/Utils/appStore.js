import { configureStore } from "@reduxjs/toolkit";
import { user } from "../Slice/userSlice";

export const store = configureStore({
  reducer: {
    user: user,
  },
});
