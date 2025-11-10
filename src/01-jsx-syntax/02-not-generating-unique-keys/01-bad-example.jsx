function App() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li> // ❌ No key prop
      ))}
    </ul>
  );
}

export default App;
