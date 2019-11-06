import React from "react";

const Kitten = props => {
  return (
    <div
      style={{ position: "absolute", left: props.mouse.x, top: props.mouse.y }}
    >
      Kitten
    </div>
  );
};

export default Kitten;
