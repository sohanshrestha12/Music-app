import styled from "styled-components";

const Wrapper = styled.section`
  width: 75vw;
  background-color: #121212;
  border-radius: 7px;
  margin: 15px 10px 5px 5px;
  position: relative;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0a0a0a;
    border-radius: 7px 7px 0 0;
  }
  .header > * {
    padding: 20px;
  }
  .spotifyPlaylists {
    padding: 16px;
  }
  .spotifyPlaylists h1 {
    padding: 0 0 10px 20px;
  }
  .cardContainer {
    max-height: 60vh;
    overflow-y: auto;
  }
  /* scrollbar style*/
  .cardContainer::-webkit-scrollbar {
    width: 12px;
  }

  .cardContainer::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 6px;
  }

  .cardContainer::-webkit-scrollbar-track {
    background-color: #222;
  }
  /* end */
  .spotifyPlaylists .cardContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 30px;
    padding: 20px;
  }
  .card > * {
    padding-top: 3px;
  }
  .card h2 {
    font-size: 18px;
    word-break: break-all;
  }
  .card p {
    font-size: 12px;
    color: #a7a7a7;
  }
  .card .cardImage {
    position: relative;
  }
  .card .play {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #1edc62;
    position: absolute;
    opacity: 0;
    transition: all 0.3s ease;
    bottom: -10px;
    right: 10px;
  }

  .card:hover .play {
    opacity: 1;
    bottom: 10px;
  }
  .card .play svg {
    font-size: 21px;
    color: black;
    padding-left: 2px;
  }
  .spotifyPlaylists .card {
    padding: 13px 10px 15px 10px;
    border-radius: 5px;
    background-color: #252525;
  }
  .card:hover {
    cursor: pointer;
    background-color: #2d2d2d;
  }
  .spotifyPlaylists .cardContainer .card .cardImage img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
  }
  .buttons > * {
    margin: 0 12px;
  }
  .signUpBtn {
    background-color: #0a0a0a;
    color: rgba(118, 115, 115, 1);
    font-weight: bold;
    border: none;
    outline: none;
  }
  .signUpBtn:hover {
    font-size: 14px;
    cursor: pointer;
    color: white;
  }
  .logInBtn {
    background-color: white;
    border-radius: 20px;
    color: black;
    font-weight: bold;
    padding: 10px 30px;
    border: none;
  }
  .logInBtn:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  .playBar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 65px;
    width: calc(100% - 25px);
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    gap: 20px;
    background-color: #282828;
    border-radius: 50px;
  }
  .songButtons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    flex-basis: 50%;
  }
  .songButtons .songButtonsControls > * {
    margin-right: 12px;
  }
  .songButtons .songButtonsControls svg {
    font-size: 30px;
  }
  .songButtons .songButtonsControls svg:nth-child(1),
  .songButtons .songButtonsControls svg:nth-child(3) {
    color: #b7adad;
  }
  .songButtons .songButtonsControls svg:nth-child(1):hover,
  .songButtons .songButtonsControls svg:nth-child(3):hover {
    color: white;
  }
  .songButtons .songButtonsControls svg:nth-child(2):hover {
    transform: scale(1.05);
  }
  .songButtons .songButtonsControls svg:hover {
    cursor: pointer;
  }
  .playBar .songInfo {
    font-size: 15px;
    flex-basis: 23%;
  }
  .seekBar {
    height: 2px;
    width: 100%;
    position: relative;
    background-color: #b7adad;
    border-radius: 10px;
  }
  .seekBar:hover {
    height: 5px;
    cursor: pointer;
  }
  .circle {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s ease;
  }
  .timeVol {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
  }
  .volume {
    position: relative;
  }
  .volRange {
    display: none;
    position: absolute;
    top: -75px;
    left: -57px;
    transform: rotate(270deg);
  }
  .volume:hover,
  .volRange input:hover {
    cursor: pointer;
  }
  .volume:hover .volRange,
  .volRange:hover,
  .volume:hover + .volRange {
    display: block;
  }

  .hamburger {
    font-size: 30px;
    display: none;
  }
  .hamburger:hover {
    cursor: pointer;
  }
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100vh;
    margin: 0;
    .playBar {
      height: 130px;
      border-radius: 15px;
      flex-direction: column;
      width:100%;
    }
    .songButtons {
      width: 100%;
    }
    .volume {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;

export default Wrapper;
