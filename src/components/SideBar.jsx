import React from "react";
import Wrapper from "../assets/wrappers/SideBar";
import { IoMdHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiPlayListLine } from "react-icons/ri";
import logo from "../assets/logo.svg";

const SideBar = () => {
  return (
    <Wrapper>
      <div className="home">
        <div className="logo">
          <img src={logo} alt="logo" style={{ filter: "invert(1)" }} />
        </div>
        <ul>
          <li>
            <IoMdHome className="invert" />
            Home
          </li>
          <li>
            <IoSearchSharp className="invert" />
            Search
          </li>
        </ul>
      </div>
      <div className="library">
        <div className="heading">
          <RiPlayListLine className="invert" />
          <h2>Your Library</h2>
        </div>
        <div className="songList">
          <ul>
            <li>song names</li>
          </ul>
        </div>
        <div className="footer">
          <div>
            <a href="https://www.spotify.com/us/legal/">
              <span>Legal</span>
            </a>
          </div>
          <div>
            <a href="https://www.spotify.com/us/privacy/">
              <span>Privacy Center</span>
            </a>
          </div>
          <div>
            <a href="https://www.spotify.com/us/legal/privacy-policy/">
              <span>Privacy Policy</span>
            </a>
          </div>
          <div>
            <a href="https://www.spotify.com/us/legal/cookies-policy/">
              <span>Cookies</span>
            </a>
          </div>
          <div>
            <a href="https://www.spotify.com/us/legal/privacy-policy/#s3">
              <span>About Ads</span>
            </a>
          </div>
          <div>
            <a href="https://www.spotify.com/us/accessibility/">
              <span>Accessibility</span>
            </a>
          </div>
          <div>
            <a href="https://www.spotify.com/us/legal/notice-at-collection/">
              <span>Notice at Collection</span>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SideBar;
