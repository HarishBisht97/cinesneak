import React from "react";
import { useSelector } from "react-redux";
import MovieContainer from "./MovieContainer";

const SecondaryMovieContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movie.popularMovies);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
  const trendingMovies = useSelector((store) => store.movie.trendingMovies);

  return (
    <div className=" bg-black">
      <div className="lg:-mt-64 relative z-50">
        <MovieContainer
          title={"Now Playing Movies"}
          movies={nowPlayingMovies}
        />
        <MovieContainer title={"Trending Movies"} movies={trendingMovies} />
        <MovieContainer title={"Upcoming Movies"} movies={upcomingMovies} />
        <MovieContainer title={"Popular Movies"} movies={popularMovies} />
        <MovieContainer title={"Top Rated Movies"} movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryMovieContainer;
