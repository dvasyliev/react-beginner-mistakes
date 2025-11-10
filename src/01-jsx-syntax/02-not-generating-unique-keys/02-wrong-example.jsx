function App() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li> // ⚠️ Works but not stable
      ))}
    </ul>
  );
}

export default App;
