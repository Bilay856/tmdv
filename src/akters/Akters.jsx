import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { API_KEY, BASE, IMG } from "../Api";
import "./Akters.css";
import { MovieContext } from "../context";

const Akters = ({ movieId }) => {
  const [akters, setAkters] = useState([]);
  const { lang, t } = useContext(MovieContext);

  async function getAkters() {
    let apiLang = lang === "RU" ? "ru-RU" : "en-US";
    try {
      let res = await axios(
        `${BASE}movie/${movieId}/credits?api_key=${API_KEY}&language=${apiLang}`,
      );
      setAkters(res.data.cast.slice(0, 20));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAkters();
  }, [movieId, lang]);

  if (akters.length === 0) {
    return null;
  }

  return (
    <div id="akters">
      <div className="container">
        <h2 className="sectionTitle">{t.cast}</h2>
        <div className="aktersList">
          {akters.map((el) => (
            <div className="aktersCard" key={el.credit_id}>
              {el.profile_path ? (
                <img
                  src={`${IMG}w185${el.profile_path}`}
                  alt={el.name}
                  loading="lazy"
                />
              ) : (
                <div className="noPhoto">👤</div>
              )}
              <h4>{el.name}</h4>
              <span>{el.character}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Akters;