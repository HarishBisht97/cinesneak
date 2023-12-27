import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../Utils/constants";
import MovieContainer from "./MovieContainer";
import { setMovieResults } from "../Slice/searchSlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchedMovie = useSelector((store) => store.search.searchedMovie);
  const movieResults = useSelector((store) => store.search.movieResults);

  const fetchMovies = async () => {
    const movieResults = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&include_adult=false&language=en-US&page=1`,
      TMDB_API_OPTIONS
    );
    const movies = await movieResults.json();

    dispatch(setMovieResults(movies));
  };

  useEffect(() => {
    fetchMovies();
  }, [searchedMovie]);

  return (
    <div>
      <div className="fixed">
        <img
          alt="background-img"
          className="bg-gradient-to-r from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img>
      </div>
      {movieResults?.results.length && (
        <div className="absolute pt-48 z-5 bg-gradient-to-tr from-black h-full">
          <div className="bg-gray-950 bg-opacity-80 mx-8 mt-4 p-12 w-screen">
            <MovieContainer
              title={"Search Results"}
              movies={movieResults.results}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
