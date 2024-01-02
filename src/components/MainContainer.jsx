import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../assets/wrappers/MainContainer";
import { allSongs } from "../utils/songs";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import SongCard from "./SongCard";

const MainContainer = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio());
  const seeker = useRef();
  const seekBar = useRef();
  const isPlayingRef = useRef(isPlaying);

  const play = (id) => {
    const cs = allSongs.find((song) => song.id === id);
    setCurrentSong(cs);
    setIsPlaying(true);
    audioRef.current.src = cs.path;
    audioRef.current.play();
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
  useEffect(() => {
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
      seekBar.current.addEventListener("click", handleSeekClick);
    });
  }, []);
  audioRef.current.addEventListener("timeupdate", () => {
    setCurrentTime(audioRef.current.currentTime);
    seeker.current.style.left =
      (audioRef.current.currentTime / audioRef.current.duration) * 100 + "%";
  });
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

  return (
    <Wrapper>
      <div className="header">
        <div className="nav">
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
            <MdSkipPrevious />
            {isPlaying ? (
              <FaCirclePause onClick={handlePlayPause} />
            ) : (
              <FaPlayCircle onClick={handlePlayPause} />
            )}
            <MdSkipNext />
          </div>
          <div ref={seekBar} className="seekBar">
            <div ref={seeker} className="circle"></div>
          </div>
        </div>
        <div className="songTime">
          {duration === 0
            ? ""
            : ` ${formatTime(currentTime)} / ${formatTime(duration)}`}
        </div>
      </div>
    </Wrapper>
  );
};

export default MainContainer;
