import { useState } from "react";

function App() {
  const [name, setName] = useState();

  return (
    <div>
      <p>Enter your name:</p>
      {/* ❌ Starts uncontrolled (undefined value) */}
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
}

export default App;
