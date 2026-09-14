import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import logo from "../img/tmdb.svg";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MovieContext } from "../context";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const { lang, setLang, t } = useContext(MovieContext);

  useEffect(() => {
    document.body.classList.toggle("light-theme", !isDark);
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="headerLeft">
            <Link to="Welcome">
              <img src={logo} alt="" width="200px" />
            </Link>
            <Link to="/popular">{t.popular}</Link>
            <Link to="/topRaited">{t.topRated}</Link>
            <Link to="/favorite">{t.favorite}</Link>
          </div>
          <div className="headerRight">
            {isDark ? (
              <FaMoon className="black_sun" onClick={() => setIsDark(false)} />
            ) : (
              <FaSun className="black_sun" onClick={() => setIsDark(true)} />
            )}
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="EN">EN</option>
              <option value="RU">RU</option>
            </select>
            <div>
              <input
                type="text"
                className="inpiut"
                placeholder={t.searchPlaceholder}
              />
              <IoSearchSharp className="search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;