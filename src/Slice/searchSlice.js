import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearching: false,
    searchedMovie: null,
    movieResults: [],
  },
  reducers: {
    setSearching: (state, action) => {
      state.isSearching = !state.isSearching;
    },
    setSearchValue: (state, action) => {
      state.searchedMovie = action.payload;
    },
    setMovieResults: (state, action) => {
      state.movieResults = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const { setSearching, setSearchValue, setMovieResults } =
  searchSlice.actions;
