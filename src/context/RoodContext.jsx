import React, { useState } from "react";
import { MovieContext } from ".";

const translations = {
  EN: {
    popular: "Popular",
    topRated: "Top Rated",
    searchPlaceholder: "Search...",
    favorite: "Favorites",
    trending: "Trending",
    footerMain: "Main",
    footerAbout: "About TMDB",
    footerApiDocs: "API Documentation",
    footerApiBusiness: "API for Business",
    footerSystemStatus: "System Status",
    footerJoin: "Get Involved",
    footerEditorGuide: "Contribution Bible",
    footerAddMovie: "Add New Movie",
    footerAddSeries: "Add New TV Show",
    footerCommunity: "Community",
    footerGuides: "Guides",
    footerHonor: "Hall of Fame",
    footerSupportForums: "Support Forums",
    footerLegal: "Legal",
    footerTerms: "Terms of Use",
    footerApiTerms: "API Terms of Use",
    footerPrivacy: "Privacy Policy",
    footerDmca: "DMCA Policy",
    welcomeTitle: "Welcome.",
    welcomeSubtitle: "Millions of movies, TV shows and people. Explore now.",
    searchButton: "Search",
    removeFromFavorite: 'Remove from favorites'
  },
  RU: {
    popular: "Популярные",
    topRated: "Топ рейтинг",
    searchPlaceholder: "Поиск...",
    favorite: "Избранное",
    trending: "В тренде",
    footerMain: "Главное",
    footerAbout: "О TMDB",
    footerApiDocs: "Документация API",
    footerApiBusiness: "API для Бизнеса",
    footerSystemStatus: "Статус системы",
    footerJoin: "Участвуйте",
    footerEditorGuide: "Библия редакторов",
    footerAddMovie: "Добавить новый фильм",
    footerAddSeries: "Добавить новый сериал",
    footerCommunity: "Сообщество",
    footerGuides: "Руководства",
    footerHonor: "Доска почёта",
    footerSupportForums: "Форумы поддержки",
    footerLegal: "О праве",
    footerTerms: "Условия использования",
    footerApiTerms: "API Правила использования",
    footerPrivacy: "Политика конфиденциальности",
    footerDmca: "Политика CDMCA",
    welcomeTitle: "Добро пожаловать.",
    welcomeSubtitle: "Миллионы фильмов, сериалов и людей. Исследуйте сейчас.",
    searchButton: "Поиск",
    removeFromFavorite : 'Удалить из избранного'
  },
};

const RoodContext = ({ children }) => {
  const [favorite, setFavorite] = useState(() => {
    return JSON.parse(localStorage.getItem("favorite")) || [];
  });

  const [lang, setLang] = useState("RU");

  let t = translations[lang];

  return (
    <MovieContext.Provider value={{ favorite, setFavorite, lang, setLang, t }}>
      {children}
    </MovieContext.Provider>
  );
};

export default RoodContext;
