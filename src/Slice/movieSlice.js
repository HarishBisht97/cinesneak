import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    movieTrailer: {},
  },
  reducers: {
    storeNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    storeMovieTrailer: (state, actions) => {
      state.movieTrailer = actions.payload;
    },
  },
});

export const movieReducer = movieSlice.reducer;
export const { storeNowPlayingMovies, storeMovieTrailer } = movieSlice.actions;
