import styled from "styled-components";

const Wrapper = styled.section`
  width: 25vw;
  padding: 10px 0 0 10px;
  background-color: black;
  color: white;
  .logo img {
    width: 110px;
  }
  .home,
  .library {
    background-color: #121212;
    border-radius: 7px;
    padding: 15px;
    margin: 5px;
  }
  .home ul li {
    display: flex;
    gap: 11px;
    list-style: none;
    padding-top: 13px;
    font-weight: bold;
    font-size: 16px;
    align-items: center;
  }
  .heading {
    display: flex;
    gap: 11px;
    align-items: center;
    margin-bottom: 20px;
  }
  .heading,
  h2 {
    font-size: 20px;
  }
  .library {
    position: relative;
    min-height: 70vh;
  }
  .footer {
    position: absolute;
    bottom: calc(0px + 10px);
    display: flex;
    font-size: 10px;
    gap: 13px;
    flex-wrap: wrap;
  }
  .footer a {
    color: grey;
  }
  .close {
    font-size: 20px;
    display: none;
  }
  .close{
    cursor: pointer;
  }
  .songList {
    max-height: 320px;
    overflow-y: auto;
    padding-right: 5px;
  }
  /* scrollbar style*/
  .songList::-webkit-scrollbar {
    width: 12px;
  }

  .songList::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 6px;
  }

  .songList::-webkit-scrollbar-track {
    background-color: #222;
  }
  /* end */
  .songList ul {
    display: flex;
    gap: 20px;
    align-items: center;
    border: 2px solid #3a3a3a;
    border-radius: 5px;
    padding: 8px 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 60px;
    justify-content: space-between;
  }
  .songList ul:hover {
    cursor: pointer;
    background-color: #2d2d2d;
  }
  .songList ul li {
    list-style: none;
    font-size: 15px;
  }
  .songList ul li:nth-child(1),
  .songList ul li:nth-child(3) {
    flex-basis: 20%;
  }
  .songList ul li:nth-child(3){
    display:flex;
    align-items:center;
    justify-content:center;
  }
   .songList ul li:nth-child(2) {
    word-break: break;
    flex-basis: 80%;
  }
  .songList ul li img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 5px;
  }
  @media screen and (max-width: 1200px) {
    position: absolute;
    left: -110%;
    transition: all 0.3s;
    z-index: 1;
    width: 300px;
    height: 100vh;
    .close {
      display: block;
      position: absolute;
      right: 20px;
      z-index: 1;
      top: 30px;
    }
   
  }
`;

export default Wrapper;
