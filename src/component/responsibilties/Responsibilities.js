import React from "react";
import Responsibility from "./Responsibility";

function Responsibilities({ responsbilities }) {
  return (
    <>
      {responsbilities.map((responsibility, i) => (
        <Responsibility key={i} responsibility={responsibility} />
      ))}
    </>
  );
}

export default Responsibilities;
