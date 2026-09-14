import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ el }) => {
  return (
    <div className="popularCard">
      <Link to={`/movieDetail/${el.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face//${el.poster_path}`}
          alt=""
          width="200px"
        />
      </Link>
      <h3>{el.title}</h3>
      <p className="gray">{el.release_date}</p>
    </div>
  );
};

export default MovieCard;
