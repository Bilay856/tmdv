import React from "react";
import Header from "./header/Header";
import Popular from "./popular/Popular";
import TopRaited from "./topRaited/TopRaited";
import { Route, Routes } from "react-router-dom";
import MovieCard from "./movieCard/MovieCard";
import MovieDetail from "./movieDetail/MovieDetail";
import Welcome from "./welcome/Welcome";
import Footer from "./footer/Footer";
import Favorite from "./favorite/Favorite";


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/popular" element={<Popular />} />
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path="/topRaited" element={<TopRaited />} />
        <Route path='/movieDetail/:movieId' element={<MovieDetail/>}/>
        <Route path="/movieDetails/:movieId" element={<MovieDetail />} />
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>

    </div>
  );
};

export default App; 
