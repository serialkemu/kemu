import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Front-end Developer",
          "UI/UX Designer",
          "Software Developer",
          "Freelancer",
          "Knowledge in Business"
         
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
