import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

const VideoBackground = ({ movieId, mute }) => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/browse");
  };
  if (!movieId) navigateHome();
  useMovieTrailer(movieId);
  const movieTrailer = useSelector((store) => store.movie?.movieTrailer);

  return (
    <div className="pt-24 md:pt-0 w-full">
      {movieTrailer?.key ? (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            movieTrailer?.key +
            "?autoplay=1&mute=" +
            mute +
            "&rel=0&iv_load_policy=3" +
            "&loop=1" +
            "&controls=0&rel=0" +
            "&playlist=" +
            movieTrailer?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default VideoBackground;
