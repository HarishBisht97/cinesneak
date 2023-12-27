import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import PrimaryMovieContainer from "./PrimaryMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";

const Browse = () => {
  useNowPlayingMovies();

  const isSearching = useSelector((store) => store.search.isSearching);

  return (
    <div>
      <Header />
      {!isSearching ? (
        <div>
          <PrimaryMovieContainer />
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
