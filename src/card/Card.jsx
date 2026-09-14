import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { API_KEY } from "../Api";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import { MovieContext } from "../context";

const Card = () => {
  const [trending, setTrending] = useState([]);
  const navigate = useNavigate();
  const { t, lang } = useContext(MovieContext);

  async function getPopular(key) {
    let apiLang = lang === "RU" ? "ru-RU" : "en-US";
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${apiLang}&page=1`,
    );
    setTrending(res.data.results);
  }

  useEffect(() => {
    getPopular(API_KEY);
  }, [lang]);

  return (
    <div className="big_vrapper">
      <div id="hello">
        <div id="card">
          <div className="trending">
            <h2 className="ref">{t.trending}</h2>
            <div className="trendingList">
              {trending.map((el) => (
                <div
                  className="filmCard"
                  key={el.id}
                  onClick={() => navigate(`/movieDetails/${el.id}`)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt={el.title}
                  />
                  <h3>{el.title}</h3>
                  <span>{el.release_date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;