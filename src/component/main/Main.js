import React from "react";
import Third from "../third/Third";
import Twothird from "../twothird/Twothird";
import resumeData from "../../assets/resume.json";
import { useState } from "react";
import Footer from "../footer/Footer";

const Main = () => {
  const [resume, setResume] = useState({ resumeData });
  const set = () => {
    setResume(resumeData);
  };

  return (
    <>
      <div className="w3-container w3-margin-top">
        <div className="w3-row-padding">
          <Third resume={resume} />
          <Twothird resume={resume} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
