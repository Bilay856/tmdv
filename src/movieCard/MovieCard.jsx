import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { IMG } from "../Api";
import { MovieContext } from "../context";
import "./MovieCard.css";

const MovieCard = ({ el }) => {
  const { favorite, toggleFavorite } = useContext(MovieContext);

  let isFavorite = favorite.some((item) => item.id === el.id);
  let year = el.release_date ? el.release_date.slice(0, 4) : "";
  let rating = el.vote_average ? el.vote_average.toFixed(1) : "";

  return (
    <div className="movieCard">
      <div className="posterBox">
        <Link to={`/movieDetail/${el.id}`}>
          {el.poster_path ? (
            <img
              src={`${IMG}w342${el.poster_path}`}
              alt={el.title}
              loading="lazy"
            />
          ) : (
            <div className="noPoster">🎬</div>
          )}
        </Link>
        {rating && <span className="rating">★ {rating}</span>}
        <button
          className="favBtn"
          onClick={() => toggleFavorite(el)}
          aria-label="favorite"
        >
          {isFavorite ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
      <Link to={`/movieDetail/${el.id}`} className="titleLink">
        <h3>{el.title}</h3>
      </Link>
      <p className="year">{year}</p>
    </div>
  );
};

export default MovieCard;