import { useState, useEffect } from "react";
type ButtonProps = {
  name?: string;
};
export default function MyButton({ name = "Ahmad" }: ButtonProps) {
  const [value, setValue] = useState(name);
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    setValue(savedName ? savedName : "Ahmad");
  }, []);

  return (
    <div
      style={{ background: "red", paddingTop: "10px", marginBottom: "10px" }}
    >
      <button
        onClick={() => {
          setValue(value === "Ahmad" ? "Ihab" : "Ahmad");
          localStorage.setItem("name", value);
        }}
      >
        Click me to toggle the name
      </button>
      <h3>{value}</h3>
    </div>
  );
}
