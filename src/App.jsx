import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleCount = (count) => {
    setCartCount(count);
  };

  return (
    <>
      <NavBar cartCount={cartCount} />
      <Home setCartCount={handleCount} cartCount={cartCount} />
    </>
  );
}

export default App;
