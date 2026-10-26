import React from "react";

// Renders text, turning **phrase** into a highlighted span.
function Highlight({ text }) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="highlight">
        {part}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export default Highlight;
