import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Popular from "./popular/Popular";
import TopRaited from "./topRaited/TopRaited";
import MovieDetail from "./movieDetail/MovieDetail";
import Welcome from "./welcome/Welcome";
import Footer from "./footer/Footer";
import Favorite from "./favorite/Favorite";
import Search from "./search/Search";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <div className="page">
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/topRaited" element={<TopRaited />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/movieDetail/:movieId" element={<MovieDetail />} />
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;