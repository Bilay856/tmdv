import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../Api";
import "./TopRaited.css";
import MovieCard from "../movieCard/MovieCard";
import Footer from "../footer/Footer";

const Popular = () => {
  const [TopRaited, setTopRaited] = useState([]);

  async function getRaited(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    );
    setTopRaited(res.data.results);
  }

  useEffect(() => {
    getRaited(API_KEY);
  }, []);

  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {TopRaited.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
          <Footer/>
    </div>
  );
};

export default Popular;
