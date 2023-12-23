import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import PrimaryMovieContainer from "./PrimaryMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <PrimaryMovieContainer />
      <SecondaryMovieContainer />
    </div>
  );
};

export default Browse;
