import React from "react";
import Cardimage from "../cardimage/Cardimage";
import Profilesummary from "../profilesummary/Profilesummary";
import Skills from "../skills/Skills";
import Language from "../language/Language";
import Hobbies from "../hobbies/Hobbies";
import Downloadresume from "../downloadresume/Downloadresume";

const Third = ({ resume }) => {
  return (
    <>
      <div className="w3-third w3-card w3-padding-16 w3-margin-bottom">
        <Cardimage resume={resume} />
        <Profilesummary resume={resume} />
        <Skills resume={resume} /> {/** Pending Remianing*/}
        <Language resume={resume} />
        <Hobbies />
        <Downloadresume resume={resume} />
      </div>
    </>
  );
};

export default Third;
