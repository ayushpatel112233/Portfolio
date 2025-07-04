// src/components/Certificates/Certificates.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Certificates/ProjectCards";
import Particle from "../Particle";
import cert1 from "../../Assets/Certificates/cert1.jpeg";
import cert2 from "../../Assets/Certificates/cert2.jpeg";
import cert3 from "../../Assets/Certificates/cert3.jpeg";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my professional certifications and achievements.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert1}
              isBlog={false}
              title="Introduction to Data Analytics"
              //description="Completed the 'Google Cloud Fundamentals: Core Infrastructure' course by Google Cloud via Coursera."
              ghLink="https://www.coursera.org/account/accomplishments/verify/QU6M3WXPXQUV"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert2}
              isBlog={false}
              title="Foundations of Cybersecurity"
              //description="Achieved AWS Certified Cloud Practitioner certification from Amazon Web Services."
              ghLink="https://www.coursera.org/account/accomplishments/verify/DYR9SUGFP5S2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert3}
              isBlog={false}
              title="Introduction to Object-Oriented Programming with Java"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/YYEUDF7PBYFB"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
