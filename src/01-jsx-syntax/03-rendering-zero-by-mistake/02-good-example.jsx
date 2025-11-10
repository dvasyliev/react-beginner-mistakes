import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([]);

  return (
    <div>
      {/* ✅ Correct: now returns true or false */}
      {fruits.length > 0 && <p>You have {fruits.length} fruits</p>}
    </div>
  );
}

export default App;
