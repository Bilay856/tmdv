import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../movieList/MovieList";
import { MovieContext } from "../context";

const Search = () => {
  const { query } = useParams();
  const { t } = useContext(MovieContext);

  return (
    <MovieList
      path="search/movie"
      query={query}
      title={`${t.searchResults}: ${query}`}
    />
  );
};

export default Search;