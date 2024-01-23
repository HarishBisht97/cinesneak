import React from "react";
import { TMDB_IMAGE_CDN_URL } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedMovie } from "../Slice/movieSlice";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const LINK_ROUTE = `/watch/${movie.title.replace(/\s/g, "")}`;

  const dispatch = useDispatch();
  const selectMovie = () => {
    dispatch(setSelectedMovie(movie));
    console.log("LINK_ROUTE", LINK_ROUTE);
    navigate(LINK_ROUTE);
  };

  return (
    <img
      className="w-64 p-4"
      alt="movie-tile"
      onClick={selectMovie}
      src={TMDB_IMAGE_CDN_URL + movie?.poster_path}
    />
  );
};

export default MovieCard;
