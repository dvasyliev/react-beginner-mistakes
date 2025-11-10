import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const handleClick = () => {
    // ✅ Correct: Update state, let React handle the DOM
    setColor("red");
  };

  return (
    <div>
      <button onClick={handleClick}>Change Color</button>
      <p style={{ color }}>Hello World</p>
    </div>
  );
}

export default App;
