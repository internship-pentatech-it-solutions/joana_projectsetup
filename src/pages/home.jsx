import React from "react";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="border border-black px-3 rounded"
      >
        Increase
      </button>
    </div>
  );
}
