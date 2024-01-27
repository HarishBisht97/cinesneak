import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import PrimaryMovieContainer from "./PrimaryMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";

const Browse = () => {
  useNowPlayingMovies();

  const searchedMovie = useSelector((store) => store.search.searchedMovie);
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  if (!nowPlayingMovies?.length) return null;
  const movieFocus = nowPlayingMovies[1];

  return (
    <div>
      <Header />
      {!searchedMovie ? (
        <div>
          <PrimaryMovieContainer movieFocus={movieFocus} />
          <SecondaryMovieContainer />
        </div>
      ) : (
        <div>
          <SearchResults />
        </div>
      )}
    </div>
  );
};

export default Browse;
