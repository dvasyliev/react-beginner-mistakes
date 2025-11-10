function Greeting({ name }) {
  // ❌ Wrong: modifying a prop directly
  name = name.toUpperCase();
  return <h2>Hello, {name}</h2>;
}

export default function App() {
  return <Greeting name="Alice" />;
}
