import React from "react";
import MouseTracker from "./components/MouseTracker";
import Cat from "./components/Cat";
import Kitten from "./components/Kitten";
import useMouseTracker from "./components/useMouseTracker";
import withMouseTracker from "./components/withMouseTracker";
import "./App.css";

// const CatWithMouse = withMouseTracker(Cat);

function App() {
  const mouse = useMouseTracker({});

  return (
    <div className="App">
      {/* <MouseTracker render={mouse => <Cat mouse={mouse} />} /> */}
      {/* <MouseTracker>{mouse => <Kitten mouse={mouse} />}</MouseTracker> */}
      <Cat mouse={mouse} />
    </div>
  );
}

export default App;
