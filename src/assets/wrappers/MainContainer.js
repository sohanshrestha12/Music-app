import styled from "styled-components";

const Wrapper = styled.section`
  width: 75vw;
  background-color: #121212;
  border-radius: 7px;
  margin: 15px 10px 0 5px;

  .header {
    display: flex;
    justify-content: space-between;
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
    padding: 0 0 0 20px;
  }
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
    transition:all 0.3s ease;
    bottom: -10px;
    right: 10px;
  }
  .card:hover{
    cursor: pointer;
  }
  .card:hover .play{
    opacity:1;
    bottom:10px;
  }
  .card .play svg {
    font-size: 21px;
    color: black;
    padding-left:2px;
  }
  .spotifyPlaylists .card {
    padding: 10px 10px 15px 10px;
    border-radius: 5px;
    background-color: #252525;
  }
  .spotifyPlaylists .cardContainer .card .cardImage img {
    width: 100%;
    object-fit: contain;
  }
`;

export default Wrapper;
