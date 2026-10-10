import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { API_KEY, BASE } from "../Api";
import { MovieContext } from "../context";
import "./Videos.css";

const Videos = ({ movieId }) => {
  const [video, setVideo] = useState([]);
  const [playing, setPlaying] = useState("");
  const { t } = useContext(MovieContext);

  async function getVideos() {
    try {
      let res = await axios(
        `${BASE}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
      );
      let list = res.data.results.filter((el) => el.site === "YouTube");
      let trailers = list.filter((el) => el.type === "Trailer");
      if (trailers.length > 0) {
        list = trailers;
      }
      setVideo(list.slice(0, 4));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setPlaying("");
    getVideos();
  }, [movieId]);

  if (video.length === 0) {
    return null;
  }

  return (
    <div id="video">
      <div className="container">
        <h2 className="sectionTitle">{t.trailers}</h2>
        <div className="videos">
          {video.map((el) => (
            <div className="videoBox" key={el.key}>
              {playing === el.key ? (
                <iframe
                  src={`https://www.youtube.com/embed/${el.key}?autoplay=1`}
                  title={el.name}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="videoThumb" onClick={() => setPlaying(el.key)}>
                  <img
                    src={`https://i.ytimg.com/vi/${el.key}/hqdefault.jpg`}
                    alt={el.name}
                    loading="lazy"
                  />
                  <span className="playBtn">
                    <FaPlay />
                  </span>
                </div>
              )}
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;