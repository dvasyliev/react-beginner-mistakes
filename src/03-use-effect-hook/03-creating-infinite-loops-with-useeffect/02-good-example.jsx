import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // ✅ Only log when count changes
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  // ✅ State updates only on button click
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
