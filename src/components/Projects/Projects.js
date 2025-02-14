import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hurricane from "../../Assets/Projects/hurricane.webp";
import grocery from "../../Assets/Projects/grocery.png";
import stock from "../../Assets/Projects/stock.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={grocery}
    isBlog={false}
    title="Grocery Price Tracker"
    description="A Grocery Price Tracker app built with React.js, Material-UI, and Firebase. This app allows users to track grocery prices, monitor discounts, and manage shopping lists in real time. Key features include price alerts, price trend analysis, and user-friendly interface."
    ghLink="https://github.com/jwzhou1/grocery-tracker.git"
    demoLink="https://youtu.be/TEGK52yTMwo"
  />
</Col>


<Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Price Prediction"
              description="This study explores the effectiveness of various models, including LSTM, XGBoost, and SVM, for predicting stock prices. Results show that LSTM outperforms others, particularly in hybrid models with XGBoost. The research highlights opportunities for improvement in feature engineering, model interpretability, and real-time prediction capabilities for enhanced financial forecasting."
              ghLink="https://ajbsr.net/data/uploads/6141.pdf"
                />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hurricane}
              isBlog={false}
              title="Tornado Prediction"
              description="I developed a Kalman-Convolutional BiLSTM with Multi-Head Attention model using the SHSR dataset from the MRMS system to enhance tornado prediction. This model outperforms KNN and LightGBM in accuracy, precision, recall, and F1-score while reducing false alarms. Future work explores expanded datasets, innovative architectures, and integrating large language models."
              ghLink="https://arxiv.org/pdf/2408.02751"
                />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
