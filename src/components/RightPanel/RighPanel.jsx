import "./RightPanel.css";
import { Modal, Popover } from "@mui/material";
import Typography from "@mui/material/Typography";
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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import Blog from "../Blog/Blog";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";

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
function RightPanel() {
  const sentence = "Hi, I'm Sneh, Software Developer/Engineer";
  const perLine = sentence.split("");
  const [navToggle, setnavToggle] = useState(false);
  const showNav = () => {
    setnavToggle(!navToggle);
  };
  return (
    <div className="right-panel">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='about' element={<AboutMe/>}></Route>
        <Route path='blog' element={<Blog/>}></Route>
        <Route path='skills' element={<Skills/>}></Route>
        <Route path='work' element={<Work/>}></Route>
      </Routes>
    </div>

  );
}

export default RightPanel;
