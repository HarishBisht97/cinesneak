import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../Utils/constants";
import {
  storeNowPlayingMovies,
  storePopularMovies,
  storeTopRatedMovies,
  storeTrendingMovies,
  storeUpcomingMovies,
} from "../Slice/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const nowPlayingMovies = await response.json();

    dispatch(storeNowPlayingMovies(nowPlayingMovies.results));
  };

  const getTrendingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      TMDB_API_OPTIONS
    );
    const trendingMovies = await response.json();
    dispatch(storeTrendingMovies(trendingMovies.results));
  };

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const popularMovies = await response.json();
    dispatch(storePopularMovies(popularMovies.results));
  };

  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const topRatedMovies = await response.json();
    dispatch(storeTopRatedMovies(topRatedMovies.results));
  };

  const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const upcomingMovies = await response.json();
    dispatch(storeUpcomingMovies(upcomingMovies.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getUpcomingMovies();
    getTopRatedMovies();
    getTrendingMovies()
  }, []);
};

export default useNowPlayingMovies;
