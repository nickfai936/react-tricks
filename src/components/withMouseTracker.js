import React, { useState } from "react";

const withMouseTracker = WrappedComponent => {
  return function() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = event => {
      setMouse({ x: event.clientX, y: event.clientY });
    };

    return (
      <div
        style={{ width: "100vw", height: "100vh" }}
        onMouseMove={handleMouseMove}
      >
        {/* {props.render(mouse)} */}
        {/* {props.children(mouse)} */}
        <WrappedComponent mouse={mouse} />
      </div>
    );
  };
};

export default withMouseTracker;
