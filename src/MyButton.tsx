import { useState } from "react";
type ButtonProps = {
  name?: string;
};
export default function MyButton({ name = "Ahmad" }: ButtonProps) {
  const [value, setValue] = useState(name);
  const [counter, setCounter] = useState(0);
  function count() {
    setCounter(counter + 1);
    console.log(`render ${counter}`);
  }
  return (
    <div
      style={{ background: "red", paddingTop: "10px", marginBottom: "10px" }}
    >
      <button
        onClick={() => {
          count();
          setValue(value === "Ahmad" ? "Ihab" : "Ahmad");
        }}
      >
        Click me to toggle the name
      </button>
      <h3>{value}</h3>
    </div>
  );
}
