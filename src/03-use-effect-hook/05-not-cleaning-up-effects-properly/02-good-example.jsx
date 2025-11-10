import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  // ✅ Clean up the listener when component unmounts
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup runs when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <h2>Window width: {width}px</h2>;
}

export default App;
