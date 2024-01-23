import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const WatchTrailer = () => {
  const selectedMovie = useSelector((store) => store.movie.selectedMovie);
  return (
    <div>
      <div>
        <VideoBackground movieId={selectedMovie.id} mute={0} />
      </div>
    </div>
  );
};

export default WatchTrailer;
