import React from "react";
import ProjectCard from "./ProjectCards";
import hurricane from "../../Assets/Projects/hurricane.webp";
import grocery from "../../Assets/Projects/grocery.png";
import stock from "../../Assets/Projects/stock.jpg";
import bitcoin from "../../Assets/Projects/bitcoin.jpeg";

function Projects() {
  const projects = [
    {
      imgPath: grocery,
      title: "Grocery Price Tracker",
      description: "A Grocery Price Tracker app built with React.js, Material-UI, and Firebase. This app allows users to track grocery prices, monitor discounts, and manage shopping lists in real time. Key features include price alerts, price trend analysis, and user-friendly interface.",
      ghLink: "https://github.com/jwzhou1/grocery-tracker.git",
      demoLink: "https://youtu.be/TEGK52yTMwo",
      tags: ["React", "Firebase", "Material-UI"],
      isBlog: false
    },
    {
      imgPath: stock,
      title: "Stock Price Prediction",
      description: "This study explores the effectiveness of various models, including LSTM, XGBoost, and SVM, for predicting stock prices. Results show that LSTM outperforms others, particularly in hybrid models with XGBoost.",
      ghLink: "https://ajbsr.net/data/uploads/6141.pdf",
      tags: ["Python", "LSTM", "XGBoost", "Machine Learning"],
      isBlog: true
    },
    {
      imgPath: bitcoin,
      title: "Bitcoin Price Prediction",
      description: "I developed a Wavelet-DBN-BiGRU hybrid model to improve Bitcoin price forecasting, achieving superior accuracy (MAE = 1.447, RMSE = 0.524, MAPE = 1.092%, R² = 0.992) compared to traditional models.",
      ghLink: "https://ajbsr.net/data/uploads/3096.pdf",
      tags: ["Wavelet Transform", "Deep Belief Networks", "Bidirectional GRU"],
      isBlog: true
    },
    {
      imgPath: hurricane,
      title: "Tornado Prediction",
      description: "I developed a Kalman-Convolutional BiLSTM with Multi-Head Attention model using the SHSR dataset from the MRMS system to enhance tornado prediction. This model outperforms KNN and LightGBM in accuracy, precision, recall, and F1-score.",
      ghLink: "https://journals.sagepub.com/doi/10.1177/18724981251331366",
      tags: ["Deep Learning", "BiLSTM", "Computer Vision", "Research"],
      isBlog: true
    }
  ];

  return (
    <section id="projects" className="projects" style={{
      padding: '4rem 0',
      background: 'linear-gradient(180deg, white, #f9fafb)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem'
          }}>
            Projects
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.75'
          }}>
            Digital products, research projects, and applications that are
            data-driven, user-centric and built with modern technologies.
          </p>
        </div>

        <div className="project-blocks" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} className="project-block" style={{ marginBottom: '3rem' }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
