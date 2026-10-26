import React from "react";
import { Container } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";
import Highlight from "../Highlight";
import { experience, education } from "../../data/resume";

function Experience() {
  return (
    <Container fluid className="experience-section" id="experience">
      <Container>
        <h1 className="project-heading">
          Where I've <strong className="purple">worked</strong>
        </h1>

        <div className="resume experience-timeline">
          {experience.map((job) => (
            <div className="resume-item" key={job.company}>
              <div className="experience-header">
                <h3 className="experience-role">
                  {job.role}
                  <span className="experience-company"> at {job.company}</span>
                </h3>
                <span className="experience-period">
                  {job.period}, {job.location}
                </span>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>
                    <Highlight text={point} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="experience-education">
          <FaGraduationCap className="experience-education-icon" />
          <div>
            <h3 className="experience-role">{education.degree}</h3>
            <p className="experience-period">
              {education.school}, {education.period}
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
