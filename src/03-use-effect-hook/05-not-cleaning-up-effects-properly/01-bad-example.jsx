import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  // ❌ Missing cleanup for event listener
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, []); // no cleanup = multiple listeners over time

  return <h2>Window width: {width}px</h2>;
}

export default App;
