import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // ❌ Wrong: adds message to dependency array unnecessarily
  useEffect(() => {
    console.log('Effect runs')
    setMessage(`You clicked ${count} times`);
  }, [count, message]); // 'message' updates inside this effect

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
