import React from "react";

const Cat = props => {
  return (
    <div
      style={{ position: "absolute", left: props.mouse.x, top: props.mouse.y }}
    >
      Cat
    </div>
  );
};

export default Cat;
