import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    // ❌ Early return: hook never runs here
    return (
      <button onClick={() => setIsLoggedIn(true)}>Log in</button>
    );
  }

  // ❌ Hook runs only when logged in
  const [user, setUser] = useState("Guest");

  return <p>Welcome back, {user}</p>;
}

export default App;
