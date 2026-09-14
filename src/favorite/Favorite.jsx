import React, { useContext } from "react";
import "./Favorite.css";
import { MovieContext } from "../context";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { favorite, setFavorite, t } = useContext(MovieContext);

  let list = favorite.filter((el) => el);

  function deleteFavorite(ProId) {
    let filterMovie = list.filter((el) => el.id !== ProId);
    setFavorite(filterMovie);
    localStorage.setItem("favorite", JSON.stringify(filterMovie));
  }

  return (
    <div>
      <div className="container">
        <div className="popular">
          {list.map((el) => (
            <div className="popularCard" key={el.id}>
              <Link to={`/movieDetail/${el.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w440_and_h660_face//${el.poster_path}`}
                  alt=""
                  width="200px"
                />
              </Link>
              <h3>{el.title}</h3>
              <p className="gray">{el.release_date}</p>
              <button className="deletekak" onClick={() => deleteFavorite(el.id)}>{t.removeFromFavorite}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;