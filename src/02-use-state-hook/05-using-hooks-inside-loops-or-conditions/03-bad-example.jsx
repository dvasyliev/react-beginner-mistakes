import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    // ❌ Wrong: hooks can't be used inside normal functions
    const [user, setUser] = useState("Guest");
    setUser("John"); // This will cause React to crash
    setIsLoggedIn(true);
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {isLoggedIn && <p>Welcome!</p>}
    </div>
  );
}

export default App;