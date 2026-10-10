import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { API_KEY, BASE, IMG } from "../Api";
import "./Welcome.css";
import Card from "../card/Card";
import { MovieContext } from "../context";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [bg, setBg] = useState("");
  const [text, setText] = useState("");
  const { t } = useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getRandomBg() {
      try {
        let res = await axios(`${BASE}movie/popular?api_key=${API_KEY}`);
        let movies = res.data.results.filter((el) => el.backdrop_path);
        let random = movies[Math.floor(Math.random() * movies.length)];
        setBg(random.backdrop_path);
      } catch (err) {
        console.log(err);
      }
    }
    getRandomBg();
  }, []);

  function goSearch(e) {
    e.preventDefault();
    let word = text.trim();
    if (word === "") {
      return;
    }
    navigate(`/search/${encodeURIComponent(word)}`);
  }

  let size = window.innerWidth < 768 ? "w780" : "w1280";

  return (
    <>
      <div
        id="welcome"
        style={{
          backgroundImage: bg ? `url(${IMG}${size}${bg})` : "none",
        }}
      >
        <div className="welcomeShade">
          <div className="container">
            <div className="welcome">
              <h1>{t.welcomeTitle}</h1>
              <h2>{t.welcomeSubtitle}</h2>
              <form className="welcomeForm" onSubmit={goSearch}>
                <input
                  className="ask"
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button className="sear" type="submit">
                  {t.searchButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Card />
    </>
  );
};

export default Welcome;