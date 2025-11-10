function App() {
  const fruits = [
    { id: crypto.randomUUID(), label: "Apple" },
    { id: crypto.randomUUID(), label: "Banana" },
    { id: crypto.randomUUID(), label: "Orange" },
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.label}</li> // ✅ Unique key
      ))}
    </ul>
  );
}

export default App;
