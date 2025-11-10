import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    // ✅ Correct: use functional updates
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+2</button>
    </div>
  );
}

export default Counter;
