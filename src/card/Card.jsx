import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { API_KEY, BASE } from "../Api";
import "./Card.css";
import { MovieContext } from "../context";
import MovieCard from "../movieCard/MovieCard";

const Card = () => {
  const [trending, setTrending] = useState([]);
  const { t, lang } = useContext(MovieContext);

  async function getTrending() {
    let apiLang = lang === "RU" ? "ru-RU" : "en-US";
    try {
      let res = await axios(
        `${BASE}trending/movie/week?api_key=${API_KEY}&language=${apiLang}`,
      );
      setTrending(res.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTrending();
  }, [lang]);

  return (
    <div id="card">
      <div className="container">
        <h2 className="sectionTitle">{t.trending}</h2>
        <div className="trendingList">
          {trending.map((el) => (
            <MovieCard key={el.id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;