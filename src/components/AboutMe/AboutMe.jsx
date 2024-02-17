
import { useState } from "react";
import Popup from "reactjs-popup";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Theme } from "@mui/material/styles";
import "animate.css";
import Home from "../Home/Home";
import "./AboutMe.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function AboutMe() {
  const sentence = "Hi, I'm Sneh, Software Developer/Engineer";
  const perLine = sentence.split("");
  const [navToggle, setnavToggle] = useState(false);
  const showNav = () => {
    setnavToggle(!navToggle);
  };
  return (
    <div>
      <div className="about-text">
        <span>
          Hi guys I am Computer Science B.Tech. graduate from IIT(ISM) Dhanbad. <br/>I have experience around NodeJs with express and fastify framework,
          Java with springboot framework and databases(Mongo and MySql).<br/>Also knowledge around architecture with cloud experience on GCP and AWS.
        </span>
      </div>
    </div>
  );
}

export default AboutMe;
