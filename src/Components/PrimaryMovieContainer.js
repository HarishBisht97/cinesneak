import React, { memo } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const PrimaryMovieContainer = ({ movieFocus }) => {
  return (
    movieFocus && (
      <div>
        <VideoTitle movie={movieFocus} />
        <VideoBackground movieId={movieFocus.id} mute={1} />
      </div>
    )
  );
};

export default memo(PrimaryMovieContainer);
