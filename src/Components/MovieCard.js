import React from "react";
import { TMDB_IMAGE_CDN_URL } from "../Utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <img
      className="w-64 p-4"
      alt="movie-tile"
      src={TMDB_IMAGE_CDN_URL + movie?.poster_path}
    />
  );
};

export default MovieCard;
