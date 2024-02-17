
import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import "animate.css";
import Home from "../Home/Home";
import "./Skills.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";

const styleAccordianHeader = {
  width: "50%", justifyContent: "center", height: "25%",
  margin: "auto",
  backgroundColor: "rgba(0, 0, 0, 0)",
  color: "azure"
};
const styleAccordian = {

  backgroundColor: "rgba(0, 0, 0, 0.90)",
  color: "azure"
};
const styleContent = {
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  color: "azure",
  textAllign: "center"

}
function Skills() {
  const sentence = "Hi, I'm Sneh, Software Developer/Engineer";
  const perLine = sentence.split("");
  const [navToggle, setnavToggle] = useState(false);
  const showNav = () => {
    setnavToggle(!navToggle);
  };
  return (
    <div className="skills-text">
      <Accordion disableGutters defaultExpanded sx={styleAccordianHeader}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={styleAccordian}
        >
          <Typography className="typography">Languages</Typography>
        </AccordionSummary>
        <AccordionDetails sx={styleContent}>
          <Typography className="typography">
            Python, Java, JavaScript, C/C++
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters defaultExpanded sx={styleAccordianHeader}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={styleAccordian}
        >
          <Typography className="typography">Frameworks</Typography>
        </AccordionSummary>
        <AccordionDetails sx={styleContent}>
          <Typography className="typography">
            ReactJS, Spring, ExpressJs, Springboot

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters defaultExpanded sx={styleAccordianHeader}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={styleAccordian}
        >
          <Typography className="typography">Developer Tools</Typography>
        </AccordionSummary>
        <AccordionDetails sx={styleContent}>
          <Typography className="typography">
            Git, Jenkins, JIRA, AWS, GCP, New Relic, Jaeger
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters defaultExpanded sx={styleAccordianHeader}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel4-content"
          id="panel4-header"
          sx={styleAccordian}
        >
          <Typography className="typography">Databases</Typography>
        </AccordionSummary>
        <AccordionDetails sx={styleContent}>
          <Typography className="typography">
            MySQL, MongoDB

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Skills;
