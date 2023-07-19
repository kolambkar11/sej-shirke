import React from "react";
import { NavLink } from "react-router-dom";
import "./vimeo.css";

const Vimeo = () => {
  return (
    <>
      <NavLink to="/sej-shirke">back to profile</NavLink>
      <h1 className="title-social">Vimeo</h1>
      <div class="w3-container youtube">
        <div class="w3-row-padding">
          <div class="w3-quarter w3-center ">
            <div className="iframe_before w-full">
              <iframe className="w3-full" src="https://player.vimeo.com/video/846500707?h=293946272b&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div class="w3-quarter w3-center ">
            <div className="iframe_before w-full">
              <iframe src="https://player.vimeo.com/video/846499169?h=257e8e7f68&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="w3-quarter w3-center ">
            <div className="iframe_before w-full">
              <iframe src="https://player.vimeo.com/video/844832683?h=a03bd2a698&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vimeo;
