import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { API_KEY } from "../Api";
import "./Welcome.css";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import { MovieContext } from "../context";

const Welcome = () => {
  const [bg, setBg] = useState("");
  const { t, lang } = useContext(MovieContext);

  useEffect(() => {
    async function getRandomBg() {
      let apiLang = lang === "RU" ? "ru-RU" : "en-US";
      const res = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${apiLang}`,
      );
      const movies = res.data.results;
      const random = movies[Math.floor(Math.random() * movies.length)];
      setBg(random.backdrop_path);
    }
    getRandomBg();
  }, [lang]);

  return (
    <div
      id="welcome"
      style={{
        backgroundImage: bg
          ? `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${bg})`
          : "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="welcome">
          <h1>{t.welcomeTitle}</h1>
          <h2>{t.welcomeSubtitle}</h2>
          <div className="buton">
            <input
              className="ask"
              type="text"
              placeholder={t.searchPlaceholder}
            />
            <button className="sear">{t.searchButton}</button>
          </div>
        </div>
      </div>
      <Card />
      <Footer />
    </div>
  );
};

export default Welcome;