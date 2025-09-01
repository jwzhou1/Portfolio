import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";

function Home() {
  return (
    <section id="home" className="intro" style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'white',
      paddingTop: '6rem',
      paddingBottom: '6rem',
      minHeight: '100vh'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Hi there, I'm Blake
            <span
              className="wave"
              style={{
                display: 'inline-block',
                width: '3.5rem',
                height: '3.5rem',
                marginLeft: '1rem',
                fontSize: '3rem'
              }}
            >
              👋🏻
            </span>
          </h1>

          <div style={{
            fontSize: '1.5rem',
            color: '#4b5563',
            marginBottom: '2rem'
          }}>
            <Type />
          </div>

          <p style={{
            fontSize: '1.125rem',
            color: '#1f2937',
            marginBottom: '2rem',
            lineHeight: '1.625',
            textAlign: 'left'
          }}>
            I'm an experienced Software Engineer and Data Scientist with expertise across full-stack web and mobile development, backend services & APIs, cloud computing, DevOps, big data, database design, and cutting-edge AI/ML technologies. Currently working as a Data Analyst at ND Supplies, I leverage a diverse toolkit including React, Angular, Vue, Node.js, Python, Java, C#, SQL/NoSQL, AWS, Azure, Docker/Kubernetes, and modern AI frameworks like TensorFlow and PyTorch. I hold a Master's degree in Computer Science and a Bachelor's degree in Economics, with academic experience at the University of Illinois Urbana-Champaign, the University of Wisconsin–Madison, and Northeastern University.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img
            src={homeLogo}
            alt="Blake Zhou"
            className="intro__image lazyloaded"
            style={{
              maxHeight: "400px",
              maxWidth: "100%",
              height: "auto",
              opacity: 1,
              position: 'relative',
              transform: 'none'
            }}
          />
        </div>
      </div>


    </section>
  );
}

export default Home;
