import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // ✅ Runs every time 'count' changes
  useEffect(() => {
    setMessage(`You clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
