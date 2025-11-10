import { useState } from "react";

function App() {
  // ✅ Initialize state with an empty string (controlled from start)
  const [name, setName] = useState();

  return (
    <div>
      <p>Enter your name:</p>
      <input onChange={(event) => setName(event.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
}

export default App;
