import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  // ❌ Wrong: making useEffect async
  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    setUser(data);
  }, []);

  return <h2>{user ? `Welcome, ${user.name}` : "Loading..."}</h2>;
}

export default App;
