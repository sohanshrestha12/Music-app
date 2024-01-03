import React from "react";
import { IoMdPlay } from "react-icons/io";
import { useMenuContext } from "../App";


const SongLists = ({ item, allPlaylistSongs }) => {
  const { name, image, id } = item;
  const { play } = useMenuContext();
  return (
    <ul onClick={() => play(allPlaylistSongs,id)}>
      <li>
        <img src={image} alt="song-image" />
      </li>
      <li>{name}</li>
      <li>
        <IoMdPlay />
      </li>
    </ul>
  );
};

export default SongLists;
