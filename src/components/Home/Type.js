import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Backend Engineer",
          "Distributed Systems",
          "Event-Driven Microservices",
          "Real-Time Systems",
          "Cloud-Native Infrastructure"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
