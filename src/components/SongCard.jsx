import React from "react";
import { FaPlay } from "react-icons/fa";

const SongCard = ({ song, play }) => {
  const { anime, Taylor_Swift, NCS, Weekend, Nepali, MIX } = song;
  const category =
    anime || Taylor_Swift || NCS || Weekend || Nepali || MIX || {};
  return (
    <div className="card" onClick={() => play(category)}>
      <div className="cardImage">
        <img src={category[0].image} alt="playlist-img" />
        <div className="play">
          <FaPlay />
        </div>
      </div>
      <h2>{category[0].name}</h2>
      <p>{category[0].description}</p>
    </div>
  );
};

export default SongCard;
