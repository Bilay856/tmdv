import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../Api";
import "./Popular.css";
import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
import Footer from "../footer/Footer";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  async function getPopular(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    );
    setPopular(res.data.results);
  }

  useEffect(() => {
    getPopular(API_KEY);
  }, []);

  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {popular.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Popular;
