import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../assets/wrappers/MainContainer";
import { allSongs } from "../utils/songs";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import SongCard from "./SongCard";
import { useMenuContext } from "../App";
import { FaVolumeUp } from "react-icons/fa";

const MainContainer = () => {
  const {
    play,
    currentSong,
    audioRef,
    isPlaying,
    handlePlayPause,
    handlePrev,
    handleNext,
  } = useMenuContext();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const volumeRef = useRef();
  const seeker = useRef();
  const seekBar = useRef();
  const isPlayingRef = useRef(isPlaying);
  const { toggleMenu } = useMenuContext();

   useEffect(() => {
    volumeRef.current.value = '100';
   },[]);

  useEffect(() => {
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
      seekBar.current.addEventListener("click", handleSeekClick);
    });
  }, []);
  useEffect(()=>{
    audioRef.current.addEventListener("timeupdate", () => {
      setCurrentTime(audioRef.current.currentTime);
      seeker.current.style.left =
        (audioRef.current.currentTime / audioRef.current.duration) * 100 + "%";
    });
  },[])
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const handleSeekClick = (e) => {
    if (isPlayingRef.current) {
      const targetRect = e.target.getBoundingClientRect();
      const clickPosition = e.clientX - targetRect.left;

      const seekerWidth = seeker.current.offsetWidth;
      const seekerLeft = clickPosition - seekerWidth / 2;
      const percent = (seekerLeft / targetRect.width) * 100;

      seeker.current.style.left = `${percent}%`;

      const newCurrentTime = `${(audioRef.current.duration * percent) / 100}`;
      setCurrentTime(newCurrentTime);

      audioRef.current.pause();
      audioRef.current.currentTime = newCurrentTime;
      audioRef.current.play();
    }
  };
  const handleVolume = (e)=>{
    audioRef.current.volume = (e.target.value)/100;
  }

  return (
    <Wrapper>
      <div className="header">
        <div className="nav">
          <IoMenu onClick={toggleMenu} className="invert hamburger" />
          <FaChevronLeft className="invert" />
          <FaChevronRight className="invert" />
        </div>
        <div className="buttons">
          <button className="signUpBtn">Sign up</button>
          <button className="logInBtn">Log in</button>
        </div>
      </div>
      <div className="spotifyPlaylists">
        <h1>Spotify Playlists</h1>
        <div className="cardContainer">
          {allSongs.map((song, i) => {
            return <SongCard song={song} key={i} play={play} />;
          })}
        </div>
      </div>
      <div className="playBar">
        <div className="songInfo">{currentSong && currentSong.name}</div>
        <div className="songButtons">
          <div className="songButtonsControls">
            <MdSkipPrevious onClick={handlePrev} />
            {isPlaying ? (
              <FaCirclePause onClick={handlePlayPause} />
            ) : (
              <FaPlayCircle onClick={handlePlayPause} />
            )}
            <MdSkipNext onClick={handleNext} />
          </div>
          <div ref={seekBar} className="seekBar">
            <div ref={seeker} className="circle"></div>
          </div>
        </div>
        <div className="timeVol">
          <div className="songTime">
            {duration === 0
              ? ""
              : ` ${formatTime(currentTime)} / ${formatTime(duration)}`}
          </div>
          <div className="volume">
            <FaVolumeUp />
            <div className="volRange">
              <input
                type="range"
                min="0"
                max="100"
                ref={volumeRef}
                onChange={handleVolume}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainContainer;
