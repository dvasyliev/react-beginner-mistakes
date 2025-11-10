import { useState } from "react";

function App() {
  const handleClick = () => {
    // ❌ Wrong: Directly manipulating the real DOM
    document.getElementById("text").style.color = "red";
  };

  return (
    <div>
      <button onClick={handleClick}>Change Color</button>
      <p id="text">Hello World</p>
    </div>
  );
}

export default App;
