import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    // ❌ Wrong: may use outdated value
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+2</button>
    </div>
  );
}

export default Counter;
