import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 2000,
            },
          },
          color: {
            value: "#e5e7eb",
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "none",
            speed: 0.1,
          },
          size: {
            value: 1,
          },
          opacity: {
            value: 0.3,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
            },
            onhover: {
              enable: false,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
