import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log("Current count:", count); // ❌ Logs old value
  }

  return <button onClick={handleClick}>{count}</button>;
}

export default App;
