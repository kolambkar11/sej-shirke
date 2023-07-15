import React from "react";
import pdf from "../../assets/04-04-AshutoshKolambkarCV.pdf";

const Downloadresume = () => {
  return (
    <>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-file fa-fw w3-margin-right w3-text-blue-grey"></i>Download Resume
        </b>
      </p>
      <a href={pdf} rel="noopener" target="_blank" className="w3-button w3-black w3-round-large">
        Shejal Shirke Resume
      </a>
    </>
  );
};

export default Downloadresume;
