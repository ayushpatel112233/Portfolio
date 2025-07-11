import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Patel </span>
             from <span className="purple"> Guajart, India.</span>
            <br />
            {/* I fell in love with programming, and along the way, I’ve definitely learned a thing or two… 🤷‍♂️
            <br />
            I have running Integrated M.Sc.IT 
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Ayush Patel</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
