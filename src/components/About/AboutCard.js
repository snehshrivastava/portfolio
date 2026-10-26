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
            from <span className="purple">Bengaluru, India.</span>
            <br />
            <br />
            I'm a Senior Engineer at <span className="purple">Khelomore</span>,
            where I own the operations backend: microservices, real-time chat on
            WebSockets and Redis, and the framework that onboards partner sports
            venues.
            <br />
            <br />
            Before that I built limit management and KYC automation for
            Emirates NBD, reward and in-app currency systems at Chingari, and
            multi-tenant reporting at Biz2Credit.
            <br />
            <br />
            I hold a B.Tech in Computer Science and Engineering from IIT (ISM)
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
            "Do. Or do not. There is no try."{" "}
          </p>
          <footer className="blockquote-footer">Yoda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
