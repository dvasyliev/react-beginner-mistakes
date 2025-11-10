import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    // ❌ Wrong: useState runs only when logged in
    const [user, setUser] = useState("Guest");
    return <p>Welcome back, {user}</p>;
  }

  return (
    <button onClick={() => setIsLoggedIn(true)}>Log in</button>
  );
}

export default App;
