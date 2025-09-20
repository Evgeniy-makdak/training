import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const titles = ["React", "Angular", "Vue"];

  function increment() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>увеличить на 1</button>
      <button onClick={decrement}>уменьшить на 1</button>
      <select
        style={{
          width: "300px",
          height: "40px",
          fontSize: "20px",
          padding: "8px",
          border: "2px solid #ccc",
          borderRadius: "4px",
        }}
      >
        {titles.map((title, index) => (
          <option key={index} value={title}>
            {title}
          </option>
        ))}
      </select>
    </>
  );
}

export default App;
