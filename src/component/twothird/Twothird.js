import React from "react";
import Workexp from "../workexps/Workexps";
import Education from "../education/Education";

import Reels from "../projects/Reelsyt";
import Youtube from "../projects/Youtube";
import Achievements from "../achievements/Achievements";

const Twothird = ({ resume }) => {
  return (
    <>
      <div className="w3-twothird">
        <Workexp resume={resume} />
        <Education resume={resume} />
        <Achievements resume={resume} />
        <Reels />
      </div>
    </>
  );
};

export default Twothird;
