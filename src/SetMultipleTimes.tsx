import { useState } from "react";
export default function SetMultipleTimes() {
  const [counter, setCounter] = useState(0);
  function handleCounter() {
    setCounter(counter + 1);
    setCounter((s) => {
      return s + 1;
    });
  }

  return (
    <div
      style={{
        border: "4px double #880303",
        padding: "18px 0px",
      }}
    >
      <p>{counter}</p>
      <button onClick={handleCounter}>+</button>
    </div>
  );
}
