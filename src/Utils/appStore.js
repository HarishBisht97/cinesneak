import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Slice/userSlice";
import { movieReducer } from "../Slice/movieSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});
