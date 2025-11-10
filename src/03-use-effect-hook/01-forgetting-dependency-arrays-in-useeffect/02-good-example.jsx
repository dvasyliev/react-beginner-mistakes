import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // ✅ Runs only once on mount
  useEffect(() => {
    console.log("Effect runs once when component mounts");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
