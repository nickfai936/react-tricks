import React, { useState } from "react";

const MouseTracker = props => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = event => {
    setMouse({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      onMouseMove={handleMouseMove}
    >
      x = {mouse.x} y = {mouse.y}
    </div>
  );
};

export default MouseTracker;
