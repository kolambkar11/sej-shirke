import React from "react";
import { NavLink } from "react-router-dom";

const Reelsyt = () => {
  return (
    <>
      <div className="w3-container w3-card w3-white">
        <div className="w3-third">
          <h2 className="w3-text-grey w3-padding-16" data-aos="fade-up">
            <NavLink to="/reels">
              <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue-grey"></i>Reels
            </NavLink>
          </h2>
        </div>
        <div className="w3-third">
          <h2 className="w3-text-grey w3-padding-16" data-aos="fade-up">
            <NavLink to="/youtube">
              <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue-grey"></i>YouTube
            </NavLink>
          </h2>
        </div>
        <div className="w3-third">
          <h2 className="w3-text-grey w3-padding-16" data-aos="fade-up">
            <NavLink to="/vimeo">
              <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue-grey"></i>Vimeo
            </NavLink>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Reelsyt;
