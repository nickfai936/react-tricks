import { useState, useEffect } from "react";

const useMouseTracker = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = event =>
      setMouse({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return mouse;
};

export default useMouseTracker;
