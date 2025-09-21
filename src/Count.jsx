import { useState } from "react";
import "./App.css";

const Count = () => {
  const [count, setCount] = useState(0);

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
      <button onClick={increment}>увеличить на 2</button>
      <button onClick={decrement}>уменьшить на 1</button>
    </>
  );
};

export default Count;
