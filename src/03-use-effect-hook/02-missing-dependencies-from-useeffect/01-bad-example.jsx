import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // ❌ Missing 'count' in dependency array
  useEffect(() => {
    setMessage(`You clicked ${count} times`);
  }, []); // runs only once — never updates again

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
