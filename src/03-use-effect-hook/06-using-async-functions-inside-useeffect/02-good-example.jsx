import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  // ✅ Correct: define async function inside the effect
  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      setUser(data);
    }

    fetchUser();
  }, []);

  return <h2>{user ? `Welcome, ${user.name}` : "Loading..."}</h2>;
}

export default App;
