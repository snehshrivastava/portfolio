import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Highlight from "../Highlight";
import { projects } from "../../data/resume";

function Projects() {
  return (
    <Container fluid className="projects-home-section" id="projects">
      <Container>
        <h1 className="project-heading">
          Things I've <strong className="purple">built</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={6} className="project-card" key={project.title}>
              <Card className="project-card-view">
                <Card.Body>
                  <Card.Title className="project-title">
                    {project.title}
                  </Card.Title>
                  <ul className="project-stack">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <Card.Text style={{ textAlign: "left" }}>
                    <Highlight text={project.description} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
