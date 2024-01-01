import React from "react";
import { FaPlay } from "react-icons/fa";


const SongCard = ({song,play}) => {
  const{name,description,image,path,id} = song;
  return (
    <div className="card" onClick={()=> play(id)}>
      <div className="cardImage">
        <img
          src={image}
          alt="playlist-img"
        />
        <div className="play">
          <FaPlay />
        </div>
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SongCard;
