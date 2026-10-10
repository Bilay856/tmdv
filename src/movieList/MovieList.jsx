import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { API_KEY, BASE } from "../Api";
import MovieCard from "../movieCard/MovieCard";
import { MovieContext } from "../context";
import "./MovieList.css";

const MovieList = ({ path, query, title }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const { t, lang } = useContext(MovieContext);

  async function getMovies(pageNum) {
    setLoading(true);
    let apiLang = lang === "RU" ? "ru-RU" : "en-US";
    let url = `${BASE}${path}?api_key=${API_KEY}&language=${apiLang}&page=${pageNum}`;
    if (query) {
      url = url + `&query=${encodeURIComponent(query)}`;
    }
    try {
      let res = await axios(url);
      if (pageNum === 1) {
        setMovies(res.data.results);
      } else {
        setMovies((old) => [...old, ...res.data.results]);
      }
      setTotalPages(res.data.total_pages);
      setPage(pageNum);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    getMovies(1);
  }, [path, query, lang]);

  let skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="movieList">
      <div className="container">
        <h2 className="sectionTitle">{title}</h2>

        {!loading && movies.length === 0 && (
          <p className="emptyText">{t.noResults}</p>
        )}

        <div className="movieGrid">
          {movies.map((el, i) => (
            <MovieCard key={`${el.id}-${i}`} el={el} />
          ))}
          {loading &&
            movies.length === 0 &&
            skeletons.map((n) => (
              <div className="movieCard" key={n}>
                <div className="posterBox skeleton"></div>
              </div>
            ))}
        </div>

        {movies.length > 0 && page < totalPages && (
          <button
            className="moreBtn"
            onClick={() => getMovies(page + 1)}
            disabled={loading}
          >
            {loading ? "..." : t.loadMore}
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;