import React from 'react'
import Wrapper from '../assets/wrappers/MainContainer'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

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
      <div className='spotify-playlists'>
        <h1>Spotify Playlists</h1>
      </div>
    </Wrapper>
  );
}

export default MainContainer
