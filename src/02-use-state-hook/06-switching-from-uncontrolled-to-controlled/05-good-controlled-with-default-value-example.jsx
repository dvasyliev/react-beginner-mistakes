import { useState } from "react";

function App() {
  // ✅ Initialize state with an empty string (controlled from start)
  const [name, setName] = useState("Dmytro");

  return (
    <div>
      <p>Enter your name:</p>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
}

export default App;
