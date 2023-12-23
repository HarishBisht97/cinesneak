import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { storeNowPlayingMovies } from "../Slice/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const nowPlayingMovies = await response.json();
    dispatch(storeNowPlayingMovies(nowPlayingMovies.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header></Header>
      {/* <div>Browse</div> */}
    </div>
  );
};

export default Browse;
