import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { API_KEY, BASE, IMG } from "../Api";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import Akters from "../akters/Akters";
import Videos from "../videos/Videos";
import { MovieContext } from "../context";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { favorite, toggleFavorite, lang, t } = useContext(MovieContext);

  async function getMovieDetail() {
    let apiLang = lang === "RU" ? "ru-RU" : "en-US";
    try {
      let res = await axios(
        `${BASE}movie/${movieId}?api_key=${API_KEY}&language=${apiLang}`,
      );
      setMovie(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovieDetail();
  }, [movieId, lang]);

  if (!movie.id) {
    return <div className="loader"></div>;
  }

  let isFavorite = favorite.some((el) => el.id === movie.id);
  let size = window.innerWidth < 768 ? "w780" : "w1280";
  let year = movie.release_date ? movie.release_date.slice(0, 4) : "";
  let rating = movie.vote_average ? movie.vote_average.toFixed(1) : "";
  let hours = movie.runtime ? Math.floor(movie.runtime / 60) : 0;
  let minutes = movie.runtime ? movie.runtime % 60 : 0;

  return (
    <>
      <div
        id="movieDetail"
        style={{
          backgroundImage: movie.backdrop_path
            ? `url(${IMG}${size}${movie.backdrop_path})`
            : "none",
        }}
      >
        <div className="detailShade">
          <div className="container">
            <div className="movieDetail">
              {movie.poster_path ? (
                <img
                  className="detailPoster"
                  src={`${IMG}w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div className="detailPoster detailNoPoster">🎬</div>
              )}

              <div className="detailInfo">
                <h1>
                  {movie.title}
                  {year && <span className="detailYear"> ({year})</span>}
                </h1>

                <div className="detailMeta">
                  {movie.release_date && <span>{movie.release_date}</span>}
                  {movie.runtime > 0 && (
                    <span>
                      {hours}
                      {t.hour} {minutes}
                      {t.min}
                    </span>
                  )}
                  {rating && <span className="detailRating">★ {rating}</span>}
                </div>

                <div className="genres">
                  {movie.genres?.map((el) => (
                    <span className="genre" key={el.id}>
                      {el.name}
                    </span>
                  ))}
                </div>

                <button
                  className={isFavorite ? "favoriteBtn active" : "favoriteBtn"}
                  onClick={() => toggleFavorite(movie)}
                >
                  {isFavorite ? <FaBookmark /> : <FaRegBookmark />}
                  <span>
                    {isFavorite ? t.removeFromFavorite : t.addFavorite}
                  </span>
                </button>

                {movie.tagline && <p className="tagline">{movie.tagline}</p>}

                {movie.overview && (
                  <>
                    <h3>{t.overview}</h3>
                    <p className="overview">{movie.overview}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Akters movieId={movieId} />
      <Videos movieId={movieId} />
    </>
  );
};

export default MovieDetail;