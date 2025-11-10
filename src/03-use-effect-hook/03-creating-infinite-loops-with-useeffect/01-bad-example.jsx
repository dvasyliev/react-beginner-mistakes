import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // ❌ Causes infinite loop
  useEffect(() => {
    console.log("Effect runs");
    setCount(count + 1); // updates state inside effect
  }, [count]); // depends on count

  return <p>Count: {count}</p>;
}

export default App;
