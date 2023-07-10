import React from "react";
import Workexp from "../workexps/Workexps";
import Education from "../education/Education";

import Reels from "../projects/Reels";
import Youtube from "../projects/Youtube";

const Twothird = ({ resume }) => {
  return (
    <>
      <div className="w3-twothird">
        <Workexp resume={resume} />
        <Education resume={resume} />
        <Reels />
      </div>
    </>
  );
};

export default Twothird;
