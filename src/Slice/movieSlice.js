import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
  },
  reducers: {
    storeNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
  },
});

export const movieReducer = movieSlice.reducer;
export const { storeNowPlayingMovies } = movieSlice.actions;
