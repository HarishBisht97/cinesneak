import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Slice/userSlice";
import { movieReducer } from "../Slice/movieSlice";
import { searchReducer } from "../Slice/searchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchReducer,
  },
});
