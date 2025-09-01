import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "Full-stack Developer",
            "Data Scientist & Developer",
            "AI & Machine Learning Engineer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 80,
        }}
      />
    </div>
  );
}

export default Type;
