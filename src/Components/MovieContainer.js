import React from "react";
import MovieCard from "./MovieCard";

const MovieContainer = ({ title, movies }) => {
  return (
    movies && (
      <div className="">
        <div className="z-10 px-8">
          <div className="text-2xl font-bold py-2 px-4 text-white">{title}</div>
          <div className="flex overflow-x-scroll">
            <div className="flex py-4 px-8">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieContainer;
