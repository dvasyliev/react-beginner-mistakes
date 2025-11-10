import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // ✅ Only include count — message is updated here
  useEffect(() => {
    console.log('Effect runs')
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
