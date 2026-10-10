import React, { useState } from "react";
import { MovieContext } from ".";

const translations = {
  EN: {
    home: "Home",
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
    addFavorite: "Add to favorites",
    removeFromFavorite: "Remove from favorites",
    overview: "Overview",
    cast: "Cast",
    trailers: "Trailers",
    hour: "h",
    min: "m",
    loadMore: "Load more",
    noResults: "Nothing found",
    searchResults: "Search results",
    emptyFavorite: "No favorites yet",
  },
  RU: {
    home: "Главная",
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
    footerDmca: "Политика DMCA",
    welcomeTitle: "Добро пожаловать.",
    welcomeSubtitle: "Миллионы фильмов, сериалов и людей. Исследуйте сейчас.",
    searchButton: "Поиск",
    addFavorite: "В избранное",
    removeFromFavorite: "Удалить из избранного",
    overview: "Обзор",
    cast: "В ролях",
    trailers: "Трейлеры",
    hour: "ч",
    min: "мин",
    loadMore: "Показать ещё",
    noResults: "Ничего не найдено",
    searchResults: "Результаты поиска",
    emptyFavorite: "В избранном пока пусто",
  },
};

const RoodContext = ({ children }) => {
  const [favorite, setFavorite] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorite")) || [];
    } catch (err) {
      return [];
    }
  });

  const [lang, setLangState] = useState(() => {
    return localStorage.getItem("lang") || "RU";
  });

  function setLang(value) {
    setLangState(value);
    localStorage.setItem("lang", value);
  }

  function toggleFavorite(item) {
    let exists = favorite.some((el) => el.id === item.id);
    let result = [];
    if (exists) {
      result = favorite.filter((el) => el.id !== item.id);
    } else {
      let slim = {
        id: item.id,
        title: item.title,
        poster_path: item.poster_path,
        release_date: item.release_date,
        vote_average: item.vote_average,
      };
      result = [...favorite, slim];
    }
    setFavorite(result);
    localStorage.setItem("favorite", JSON.stringify(result));
  }

  let t = translations[lang];

  return (
    <MovieContext.Provider
      value={{ favorite, setFavorite, toggleFavorite, lang, setLang, t }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default RoodContext;