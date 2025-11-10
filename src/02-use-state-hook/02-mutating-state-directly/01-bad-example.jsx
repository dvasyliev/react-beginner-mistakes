import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);

  function handleAddFruit() {
    // ❌ Wrong: changing the same array
    fruits.push("Orange");
    setFruits(fruits);
  }

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <button onClick={handleAddFruit}>Add Fruit</button>
    </div>
  );
}

export default App;
