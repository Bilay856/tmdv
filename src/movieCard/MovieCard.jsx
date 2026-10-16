import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaBookmark, FaRegBookmark, FaPlay, FaTimes } from "react-icons/fa";
import { API_KEY, BASE, IMG } from "../Api";
import { MovieContext } from "../context";
import "./MovieCard.css";

const MovieCard = ({ el }) => {
  const { favorite, toggleFavorite, t } = useContext(MovieContext);
  const [modal, setModal] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const [loadingTrailer, setLoadingTrailer] = useState(false);

  let isFavorite = favorite.some((item) => item.id === el.id);
  let year = el.release_date ? el.release_date.slice(0, 4) : "";
  let rating = el.vote_average ? el.vote_average.toFixed(1) : "";

  async function openTrailer() {
    setModal(true);
    setTrailerKey("");
    setLoadingTrailer(true);
    try {
      let res = await axios(
        `${BASE}movie/${el.id}/videos?api_key=${API_KEY}&language=en-US`,
      );
      let list = res.data.results.filter((item) => item.site === "YouTube");
      let trailer = list.find((item) => item.type === "Trailer") || list[0];
      if (trailer) {
        setTrailerKey(trailer.key);
      }
    } catch (err) {
      console.log(err);
    }
    setLoadingTrailer(false);
  }

  function closeTrailer() {
    setModal(false);
    setTrailerKey("");
  }

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
        <button
          className="playTrailer"
          onClick={openTrailer}
          aria-label="trailer"
        >
          <FaPlay />
        </button>
      </div>
      <Link to={`/movieDetail/${el.id}`} className="titleLink">
        <h3>{el.title}</h3>
      </Link>
      <p className="year">{year}</p>

      {modal &&
        createPortal(
          <div className="modal" onClick={closeTrailer}>
            <div className="modalBox" onClick={(e) => e.stopPropagation()}>
              <button
                className="modalClose"
                onClick={closeTrailer}
                aria-label="close"
              >
                <FaTimes />
              </button>
              {loadingTrailer && <div className="loader"></div>}
              {!loadingTrailer && trailerKey && (
                <iframe
                  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                  title={el.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                ></iframe>
              )}
              {!loadingTrailer && !trailerKey && (
                <p className="modalText">{t.noTrailer}</p>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default MovieCard;