import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([]);

  return (
    <div>
      {/* ❌ Wrong: 0 is falsy, but React can render it */}
      {fruits.length && <p>You have {fruits.length} fruits</p>}
    </div>
  );
}

export default App;
