import { ChangeEvent, useState } from "react";
export default function MyInput() {
  const [myInput, setMyInput] = useState("");

  return (
    <div
      style={{
        background: "#be0000",
        padding: "10px 0px",
        marginBottom: "10px",
      }}
    >
      <label htmlFor="sa">PLease enter your name: </label>
      <input
        id="sa"
        value={myInput}
        type="text"
        maxLength={10}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setMyInput(event.target.value)
        }
      />
    </div>
  );
}
// function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setMyInput(event.target.value);
//   }
