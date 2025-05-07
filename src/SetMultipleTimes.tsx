import { useEffect, useState } from "react";
export default function SetMultipleTimes() {
  const [counter, setCounter] = useState(0);
  function handleCounter() {
    setCounter(counter + 1);
    setCounter((s) => {
      return s + 1;
    });
    localStorage.setItem("counter", JSON.stringify(counter + 1));
  }
  useEffect(() => {
    const savedCounter = localStorage.getItem("counter");
    setCounter(savedCounter ? JSON.parse(savedCounter) : 0);
  }, []);
  return (
    <div className="border-4 border-double border-red-900 py-5 px-0">
      <p>{counter}</p>
      <button onClick={handleCounter}>+</button>
    </div>
  );
}
