import React, { useEffect, useState } from "react";
import { API_KEY } from "../Api";
import axios from "axios";
import './Videos.css'

const Videos = ({movieId}) => {
  const [video, setVideo] = useState([]);

  async function getVideos(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`,
    );
    setVideo(res.data.results);
  }

  useEffect(() => {
    getVideos(API_KEY);
  }, []);
  return (
    <div id="video">
      <div className="container">


        <div className="videos">
          {video.slice(7, 9).map((el) => (
              <iframe
              width="505"
              height="305"
              src={`https://www.youtube.com/embed/${el.key}`}
              title="AIHAN - Amore (Lyric Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              ></iframe>
            ))}
        </div>
            </div>
      </div>

  );
};

export default Videos;
