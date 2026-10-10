import React, { useContext } from "react";
import MovieList from "../movieList/MovieList";
import { MovieContext } from "../context";

const Popular = () => {
  const { t } = useContext(MovieContext);

  return <MovieList path="movie/popular" title={t.popular} />;
};

export default Popular;