import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";

function Home() {
  return (
    <section id="home" className="intro home-section">
      <div className="container home-container">
        <div className="home-text">
          <h1 className="home-title">
            Hi there, I'm Blake
            <span className="wave">👋🏻</span>
          </h1>

          <div className="home-subtitle">
            <Type />
          </div>

          <p className="home-description">
            I'm an experienced Software Engineer and Data Scientist with expertise across full-stack web and mobile development, backend services & APIs, cloud computing, DevOps, big data, database design, and cutting-edge AI/ML technologies. Currently working as a Data Analyst at ND Supplies, I leverage a diverse toolkit including React, Angular, Vue, Node.js, Python, Java, C#, SQL/NoSQL, AWS, Azure, Docker/Kubernetes, and modern AI frameworks like TensorFlow and PyTorch. I hold a Master's degree in Computer Science and a Bachelor's degree in Economics, with academic experience at the University of Illinois Urbana-Champaign, the University of Wisconsin–Madison, and Northeastern University.
          </p>
        </div>

        <div className="home-image">
          <img
            src={homeLogo}
            alt="Blake Zhou"
            className="intro__image lazyloaded home-logo"
          />
        </div>
      </div>


    </section>
  );
}

export default Home;
