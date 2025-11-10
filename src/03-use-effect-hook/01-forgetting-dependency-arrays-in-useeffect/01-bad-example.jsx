import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // ❌ No dependency array → runs after every render
  useEffect(() => {
    console.log("Effect runs");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
