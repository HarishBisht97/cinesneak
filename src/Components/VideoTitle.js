import React from "react";

const VideoTitle = ({ movie }) => {
  return (
    <div>
      <div className="absolute w-screen aspect-video p-12 pt-60 bg-gradient-to-r from-black text-white">
        <div className="text-6xl  font-bold  pt-40">{movie.original_title}</div>
        <div className="text-2xl w-2/6 pt-16">{movie.overview}</div>
        <div className="pt-10">
          <button className="bg-white text-black w-32 h-16 rounded-lg mr-4  text-2xl hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="bg-slate-600 text-white w-36 h-16 rounded-lg text-2xl hover:bg-opacity-80">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
