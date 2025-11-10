import { useState } from "react";

function App() {
  // ✅ Always call hooks at the top
  const [user, setUser] = useState("Guest");
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <p>Welcome back, {user}</p>;
  }

  return <p>Please log in first</p>;
}

export default App;
