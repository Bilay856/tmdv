import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import logo from "../img/tmdb.svg";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MovieContext } from "../context";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const { lang, setLang, t } = useContext(MovieContext);

  useEffect(() => {
    document.body.classList.toggle("light-theme", !isDark);
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  function closeMenu() {
    setMenu(false);
  }

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to="/welcome" onClick={closeMenu}>
            <img src={logo} alt="" className="logo" />
          </Link>

          <div className={menu ? "headerMenu open" : "headerMenu"}>
            <div className="headerLeft">
              <Link to="/popular" onClick={closeMenu}>{t.popular}</Link>
              <Link to="/topRaited" onClick={closeMenu}>{t.topRated}</Link>
              <Link to="/favorite" onClick={closeMenu}>{t.favorite}</Link>
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
              <div className="searchBox">
                <input
                  type="text"
                  className="inpiut"
                  placeholder={t.searchPlaceholder}
                />
                <IoSearchSharp className="search" />
              </div>
            </div>
          </div>

          <div className="burger" onClick={() => setMenu(!menu)}>
            {menu ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;