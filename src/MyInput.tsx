import { ChangeEvent, useState, useEffect } from "react";
export default function MyInput() {
  const [myInput, setMyInput] = useState("");
  useEffect(() => {
    const savedInput = localStorage.getItem("MyInput");
    setMyInput(savedInput ? JSON.parse(savedInput) : "");
  }, []);
  return (
    <div className="py-2.5 px-0 bg-red-200 mb-2.5">
      <label htmlFor="sa">PLease enter your name: </label>
      <input
        id="sa"
        value={myInput}
        type="text"
        maxLength={10}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setMyInput(event.target.value);
          localStorage.setItem("MyInput", JSON.stringify(event.target.value));
        }}
      />
    </div>
  );
}
