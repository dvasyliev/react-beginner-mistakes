import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([]);

  return (
    <div>
      {/* ✅ Correct: now returns true or false */}
      {fruits.length > 0 ? (
        <p>You have {fruits.length} fruits</p>
      ) : (
        <p>No fruits yet</p>
      )}
    </div>
  );
}

export default App;
