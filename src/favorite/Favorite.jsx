import React, { useContext } from "react";
import { MovieContext } from "../context";
import MovieCard from "../movieCard/MovieCard";
import "../movieList/MovieList.css";

const Favorite = () => {
  const { favorite, t } = useContext(MovieContext);

  return (
    <div className="movieList">
      <div className="container">
        <h2 className="sectionTitle">{t.favorite}</h2>

        {favorite.length === 0 && <p className="emptyText">{t.emptyFavorite}</p>}

        <div className="movieGrid">
          {favorite.map((el) => (
            <MovieCard key={el.id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;