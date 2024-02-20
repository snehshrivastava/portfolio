import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sneh Shrivastava </span>
            from <span className="purple"> India.</span>
            <br />
            I am currently employed as a software developer at BIZ2X.
            <br />
            I have completed B.Tech. in Computer Science and Engineering at IIT(ISM)
            Dhanbad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do, or Do not. There is not try!"{" "}
          </p>
          <footer className="blockquote-footer">Dumbledore</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
