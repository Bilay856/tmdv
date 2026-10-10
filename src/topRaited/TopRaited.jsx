import React, { useContext } from "react";
import MovieList from "../movieList/MovieList";
import { MovieContext } from "../context";

const TopRaited = () => {
  const { t } = useContext(MovieContext);

  return <MovieList path="movie/top_rated" title={t.topRated} />;
};

export default TopRaited;