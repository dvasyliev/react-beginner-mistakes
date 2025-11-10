function App() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={crypto.randomUUID()}>{fruit.label}</li> // ⚠️ Wrong
      ))}
    </ul>
  );
}

export default App;
