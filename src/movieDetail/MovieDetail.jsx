import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { API_KEY } from "../Api";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineBookmark } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import Akters from "../akters/Akters";
import Videos from "../videos/Videos";
import Footer from "../footer/Footer";
import { MovieContext } from "../context";

const MovieDetail = () => {
  const [MovieDetail, setMovieDetail] = useState({});
  const { movieId } = useParams();
  const { favorite, setFavorite, lang } = useContext(MovieContext);

  async function getMovieDetail(key) {
    let apiLang = lang === "RU" ? "ru-RU" : "en-US";
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${apiLang}`,
    );
    setMovieDetail(res.data);
  }

  useEffect(() => {
    getMovieDetail(API_KEY);
  }, [movieId, lang]);

  let isFavorite = favorite.some((el) => el.id === MovieDetail.id);

  function toggleFavorite(item) {
    if (isFavorite) {
      let filterMovie = favorite.filter((el) => el.id !== item.id);
      setFavorite(filterMovie);
      localStorage.setItem("favorite", JSON.stringify(filterMovie));
    } else {
      let result = [...favorite, item];
      setFavorite(result);
      localStorage.setItem("favorite", JSON.stringify(result));
    }
  }

  return (
    <>
      <div
        id="movieDetail"
        style={{
          background: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${MovieDetail.backdrop_path}) center center / cover`,
        }}
      >
        <div className="movieDetail">
          <img
            className="pauk"
            src={`https://image.tmdb.org/t/p/w440_and_h660_face/${MovieDetail.poster_path}`}
            alt=""
            width="250px"
          />
          <div className="movieDetailTittle">
            <h1>
              {MovieDetail.title} {MovieDetail.release_date?.slice(0, 4)}{" "}
            </h1>
            <h5>
              {MovieDetail.release_date}
              {MovieDetail.genres?.map((el) => (
                <span key={el.id}>{el.name}</span>
              ))}
              {MovieDetail.runtime}
            </h5>
            <div className="display">
              <div className="dasplay">
                <LuMenu className="favorite" />
              </div>
              <div className="dasplay">
                <MdOutlineFavoriteBorder className="favorite" />
              </div>
              <div className="dasplay">
                <a onClick={() => toggleFavorite(MovieDetail)}>
                  {isFavorite ? (
                    <MdBookmarkAdded className="favorite" />
                  ) : (
                    <MdOutlineBookmark className="favorite" />
                  )}
                </a>
              </div>
            </div>

            <p className="rek">{MovieDetail.tagline}</p>
            <p className="text">{MovieDetail.overview}</p>
          </div>
        </div>
      </div>
      <div id="akters">
        <div className="container">
          <div className="akters">
            <Akters movieId={movieId} />
          </div>
        </div>
      </div>

      <div className="videos">
        <Videos movieId={movieId} />
      </div>
      <Footer />
    </>
  );
};

export default MovieDetail;