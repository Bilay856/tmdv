import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { API_KEY } from "../Api";
import "./Akters.css";
import { MovieContext } from "../context";

const Akters = ({ movieId }) => {
  const [akters, setAkters] = useState([]);
  const { lang } = useContext(MovieContext);

  async function getAkters(key) {
    let apiLang = lang === "RU" ? "ru-RU" : "en-US";
    let result = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=${apiLang}`,
    );
    setAkters(result.data.cast);
  }

  useEffect(() => {
    getAkters(API_KEY);
  }, [movieId, lang]);

  return (
    <div id="akters">
      <div className="akters">
        {akters.map((el) => (
          <div className="aktersCard" key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w440_and_h660_face/${el.profile_path}`}
              alt=""
              width="150px"
            />
            <h2>{el.name}</h2>
            <span>{el.character}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Akters;