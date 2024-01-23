import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    movieTrailer: {},
    popularMovies: [],
    upcomingMovies: [],
    trendingMovies: [],
    topRatedMovies: [],
    selectedMovie: {},
  },
  reducers: {
    storeNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    storePopularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },
    storeTopRatedMovies: (state, actions) => {
      state.topRatedMovies = actions.payload;
    },
    storeUpcomingMovies: (state, actions) => {
      state.upcomingMovies = actions.payload;
    },
    storeTrendingMovies: (state, actions) => {
      state.trendingMovies = actions.payload;
    },
    storeMovieTrailer: (state, actions) => {
      state.movieTrailer = actions.payload;
    },
    setSelectedMovie: (state, actions) => {
      state.selectedMovie = actions.payload;
    },
  },
});

export const movieReducer = movieSlice.reducer;
export const {
  storeNowPlayingMovies,
  storeMovieTrailer,
  storePopularMovies,
  storeTopRatedMovies,
  storeUpcomingMovies,
  storeTrendingMovies,
  setSelectedMovie,
} = movieSlice.actions;
