function Greeting({ name }) {
  // ✅ Compute a new value, don’t mutate props
  const displayName = name.toUpperCase();
  return <h2>Hello, {displayName}</h2>;
}

export default function App() {
  return <Greeting name="Alice" />;
}
