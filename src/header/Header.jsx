import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import logo from "../img/tmdb.svg";
import {
  FaSun,
  FaMoon,
  FaSearch,
  FaHome,
  FaFire,
  FaStar,
  FaBookmark,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MovieContext } from "../context";

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    let saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [text, setText] = useState("");
  const { lang, setLang, t } = useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("light-theme", !isDark);
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  function changeTheme() {
    let next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  function goSearch(e) {
    e.preventDefault();
    let word = text.trim();
    if (word === "") {
      return;
    }
    navigate(`/search/${encodeURIComponent(word)}`);
    setText("");
  }

  function linkClass({ isActive }) {
    return isActive ? "navLink active" : "navLink";
  }

  function tabClass({ isActive }) {
    return isActive ? "tab active" : "tab";
  }

  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header">
            <Link to="/welcome" className="logoLink">
              <img src={logo} alt="logo" className="logo" />
            </Link>

            <div className="headerLinks">
              <NavLink to="/popular" className={linkClass}>
                {t.popular}
              </NavLink>
              <NavLink to="/topRaited" className={linkClass}>
                {t.topRated}
              </NavLink>
              <NavLink to="/favorite" className={linkClass}>
                {t.favorite}
              </NavLink>
            </div>

            <div className="headerRight">
              <form className="searchBox" onSubmit={goSearch}>
                <input
                  type="text"
                  className="searchInput"
                  placeholder={t.searchPlaceholder}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" className="searchBtn" aria-label="search">
                  <FaSearch />
                </button>
              </form>
              <button
                className="themeBtn"
                onClick={changeTheme}
                aria-label="theme"
              >
                {isDark ? <FaMoon /> : <FaSun />}
              </button>
              <select
                className="langSelect"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              >
                <option value="EN">EN</option>
                <option value="RU">RU</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <nav className="bottomNav">
        <NavLink to="/welcome" className={tabClass}>
          <FaHome />
          <span>{t.home}</span>
        </NavLink>
        <NavLink to="/popular" className={tabClass}>
          <FaFire />
          <span>{t.popular}</span>
        </NavLink>
        <NavLink to="/topRaited" className={tabClass}>
          <FaStar />
          <span>{t.topRated}</span>
        </NavLink>
        <NavLink to="/favorite" className={tabClass}>
          <FaBookmark />
          <span>{t.favorite}</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Header;