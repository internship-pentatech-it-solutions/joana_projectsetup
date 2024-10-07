import { useState } from "react";
import Home from "./pages/home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <p className="text-blue-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
