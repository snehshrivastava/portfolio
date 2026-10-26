import React from "react";
import { TechGrid, TOOL_CATEGORIES, technologiesIn } from "./Techstack";

function Toolstack() {
  return <TechGrid names={technologiesIn((c) => TOOL_CATEGORIES.includes(c))} />;
}

export default Toolstack;
