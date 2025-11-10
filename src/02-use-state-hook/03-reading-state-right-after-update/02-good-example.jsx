import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    const nextCount = count + 1; // ✅ compute next value
    setCount(nextCount);
    console.log("Next count:", nextCount); // ✅ correct value
  }

  return <button onClick={handleClick}>{count}</button>;
}

export default App;
