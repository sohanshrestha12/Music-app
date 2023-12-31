import React from "react";
import Wrapper from "../assets/wrappers/MainContainer";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const MainContainer = () => {
  return (
    <Wrapper>
      <div className="header">
        <div className="nav">
          <FaChevronLeft className="invert" />
          <FaChevronRight className="invert" />
        </div>
        <div className="buttons">
          <button>Sign up</button>
          <button>Login</button>
        </div>
      </div>
      <div className="spotifyPlaylists">
        <h1>Spotify Playlists</h1>
        <div className="cardContainer">
          <div className="card">
            <div className="cardImage">
              <img
                src="https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de"
                alt="playlist-img"
              />
              <div className="play">
                <FaPlay />
              </div>
            </div>
            <h2>Dinner with Friends</h2>
            <p>The perfect soundtrack to those long nights over dinner</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainContainer;
