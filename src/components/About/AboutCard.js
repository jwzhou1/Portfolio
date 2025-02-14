import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Blake Zhou</span> from
  <span className="purple"> Vancouver, Canada.</span>
  <br />
  I am currently employed as a Data Analyst at ND Supplies, 
  <br />
  the largest cannabis packaging company in Canada.
  <br />
  I graduated with:
  <ul>
    <li>Master of Science in Computer Science from Northeastern University, Vancouver, BC</li>
    <li>Master of Science in Economics from the University of Wisconsin-Madison</li>
    <li>Bachelor of Science in Econometrics & Quantitative Economics from the University of Illinois at Urbana–Champaign</li>
  </ul>
            Apart from my job, I am preparing for my startup, <a href="https://www.linkedin.com/company/ivvy-ai/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><strong className="purple">Ivvy AI</strong></a>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
