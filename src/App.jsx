import React, { createContext, useContext, useRef, useState } from "react";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import Wrapper from "./assets/wrappers/AppLayout";

const MenuContext = createContext();

const App = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const audioRef = useRef(new Audio()); 
  const [allPlaylistSongs,setAllPlaylistSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);



  
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const play = (category,id=1) => {
    setAllPlaylistSongs(category);
    const currentlyPlayingSong = category[0].songs.find((item) => item.id === id.toString());
    setCurrentSong(currentlyPlayingSong);
    audioRef.current.src = currentlyPlayingSong.path;
    audioRef.current.play();
    setIsPlaying(true);
  };
   const handlePlayPause = () => {
     if (currentSong) {
       if (isPlaying) {
         setIsPlaying(!isPlaying);
         audioRef.current.pause();
       } else {
         setIsPlaying(!isPlaying);
         audioRef.current.play();
       }
     }
   };
   const handlePrev = () => {
     if (isPlaying) {
       let prevSongId = Number(currentSong.id) - 1;
       if (prevSongId < 1) {
         prevSongId = allPlaylistSongs[0].songs.length;
       }
       const prevSong = allPlaylistSongs[0].songs.find(
         (item) => item.id === prevSongId.toString()
       );
       audioRef.current.src = prevSong.path;
       setCurrentSong(prevSong);
       audioRef.current.play();
     }
   };
   
  const handleNext = () => {
    if (isPlaying) {
      let nextSongId = Number(currentSong.id) + 1;
      if (nextSongId > allPlaylistSongs[0].songs.length) {
        nextSongId = 1;
      }
      const nextSong = allPlaylistSongs[0].songs.find(
        (item) => item.id === nextSongId.toString()
      );
      audioRef.current.src = nextSong.path;
      setCurrentSong(nextSong);
      audioRef.current.play();
    }
  };
  return (
    <MenuContext.Provider
      value={{ isMenuVisible, toggleMenu, play, allPlaylistSongs, currentSong ,audioRef,isPlaying,handlePlayPause,handlePrev,handleNext}}
    >
      <Wrapper>
        <SideBar />
        <MainContainer />
      </Wrapper>
    </MenuContext.Provider>
  );
};
export const useMenuContext = () => useContext(MenuContext);
export default App;
