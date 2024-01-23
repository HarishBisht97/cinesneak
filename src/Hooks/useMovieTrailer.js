import { useDispatch } from "react-redux";
import { storeMovieTrailer } from "../Slice/movieSlice";
import { TMDB_API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const useMovieTrailer = async (movieId) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMovieTrailer = async () => {
    const movieTrailers = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMDB_API_OPTIONS
    );
    const trailers = await movieTrailers.json();
    const trailer =
      trailers?.results?.filter((each) => each.type === "Trailer")[0] ||
      trailers?.results[0];

    dispatch(storeMovieTrailer(trailer));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, [fetchMovieTrailer]);
};

export default useMovieTrailer;
