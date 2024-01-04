import React from "react";
import { IoMdPlay } from "react-icons/io";
import { useMenuContext } from "../App";
import { IoIosPause } from "react-icons/io";


const SongLists = ({ item, allPlaylistSongs }) => {
  const { name, image, id } = item;
  const { play, currentSong } = useMenuContext();
  return (
    <ul onClick={() => play(allPlaylistSongs,id)} className={currentSong.id === id ? 'active':""}>
      <li>
        <img src={image} alt="song-image" />
      </li>
      <li>{name}</li>
      <li>
        {currentSong.id === id ?<IoIosPause/>:<IoMdPlay />}
      </li>
    </ul>
  );
};

export default SongLists;
