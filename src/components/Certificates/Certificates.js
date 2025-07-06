// src/components/Certificates/Certificates.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Certificates/ProjectCards";
import Particle from "../Particle";
import cert1 from "../../Assets/Certificates/cert1.jpeg";
import cert2 from "../../Assets/Certificates/cert2.jpeg";
import cert3 from "../../Assets/Certificates/cert3.jpeg";
import cert4 from "../../Assets/Certificates/cert4.jpeg";
import cert5 from "../../Assets/Certificates/cert5.jpeg";
import cert6 from "../../Assets/Certificates/cert6.jpeg";
import cert7 from "../../Assets/Certificates/cert7.jpeg";
import cert8 from "../../Assets/Certificates/cert8.jpeg";
import cert9 from "../../Assets/Certificates/cert9.jpeg";
import cert10 from "../../Assets/Certificates/cert10.jpeg";
import cert11 from "../../Assets/Certificates/cert11.jpeg";
import cert12 from "../../Assets/Certificates/cert12.jpeg";
import cert13 from "../../Assets/Certificates/cert13.jpeg";
 
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert4}
              isBlog={false}
              title="Web and Mobile Testing with Selenium"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/UTJ7D7O3LM8J"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert5}
              isBlog={false}
              title="Python for Data Analysis: Pandas & NumPy"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/9EEUYXP46R9A"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert6}
              isBlog={false}
              title="Blockchain Basics"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/JZDUGPFM5DZN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert7}
              isBlog={false}
              title="Database Design and Basic SQL in PostgreSQL"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/AZHQRJBNCXEZ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert8}
              isBlog={false}
              title="C++ For C Programmers, Part A"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/SK6LFMCWGWDX"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert9}
              isBlog={false}
              title="C++ For C Programmers, Part B"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/EQUK87VRKC62"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert10}
              isBlog={false}
              title="Interactivity with JavaScript"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/SYR8ADAUHJ6R"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert11}
              isBlog={false}
              title="C for Everyone: Structured Programming"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/QK3ULK7QWNSS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert12}
              isBlog={false}
              title="Fundamentals of Visualization with Tableau"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/ZK2M7XQED3BS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert13}
              isBlog={false}
              title="Introduction to HTML5"
              //description="Completed a comprehensive React development bootcamp covering advanced concepts."
              ghLink="https://www.coursera.org/account/accomplishments/verify/DCEHYBBFW4UF"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
