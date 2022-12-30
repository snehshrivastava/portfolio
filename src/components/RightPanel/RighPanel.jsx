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
      <a class="left-toggle" onClick={showNav}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-inline--fa fa-bars fa-w-12 fa-3x"
        >
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
            class=""
          ></path>
        </svg>
      </a>
      <div className="home-text animation">
        {perLine.map((text) => {
          //   if (text == " ") return " ";
          if (text === ",") {
            return (
              <>
                <span className="animate">{text}</span>
                <br />
              </>
            );
          }
          if (text === " ") return <span> </span>;
          return <span className="animate">{text}</span>;
          //   return <span>${text}</span>;
        })}
      </div>
      {navToggle && (
        <Modal
          open={navToggle}
          onClose={showNav}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default RightPanel;
