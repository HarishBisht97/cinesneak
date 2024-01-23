import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APP_BACKGROUND_IMAGE, TMDB_API_OPTIONS } from "../Utils/constants";
import MovieContainer from "./MovieContainer";
import { setMovieResults } from "../Slice/searchSlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchedMovie = useSelector((store) => store.search.searchedMovie);
  const movieResults = useSelector((store) => store.search.movieResults);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMovies = async () => {
    console.log("searchedMovie", searchedMovie);

    const movieResults = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&include_adult=false&language=en-US&page=1`,
      TMDB_API_OPTIONS
    );
    const movies = await movieResults.json();

    dispatch(setMovieResults(movies));
  };

  useEffect(() => {
    searchedMovie && fetchMovies();
  }, [searchedMovie, fetchMovies]);

  return (
    <div>
      <div className="fixed">
        <img
          alt="background-img"
          className="bg-gradient-to-r from-black"
          src={APP_BACKGROUND_IMAGE}
        ></img>
      </div>
      {
        <div className="absolute pt-48 z-5 bg-gradient-to-tr from-black h-full ">
          <div className="bg-gray-950 bg-opacity-80 mx-8 mt-4 p-12 w-screen">
            {movieResults?.results?.length && (
              <MovieContainer
                title={"Search Results"}
                movies={movieResults.results}
              />
            )}
          </div>
        </div>
      }
    </div>
  );
};

export default SearchResults;
