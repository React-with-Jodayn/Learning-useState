import { ChangeEvent, useEffect, useState } from "react";
export default function UsingArraysAsStateInTheComponent() {
  const [divices, setDivices] = useState(["iphone1", "iphone2", "iphone3"]);
  const divicesList = divices.map((divice, index) => (
    <li key={index}>
      {divice}
      <button
        style={{ fontSize: "12px", padding: "2px" }}
        onClick={() => handelDeleteItem(index)}
      >
        delete
      </button>
      <button
        style={{ fontSize: "12px", padding: "2px" }}
        onClick={() => handelEditItem(index)}
      >
        edit
      </button>
    </li>
  ));
  function handelDeleteItem(key: number) {
    const divicesNew = [...divices];
    divicesNew.splice(key, 1);
    setDivices(divicesNew);
    localStorage.setItem("divices", JSON.stringify(divicesNew));
  }
  function handelEditItem(key: number) {
    const editedDevice = prompt(`Edit device number ${key + 1}`);

    if (editedDevice !== null && editedDevice != "") {
      const devicesNew = divices.map((divice, index) => {
        if (key === index) {
          return editedDevice;
        }
        return divice;
      });
      setDivices(devicesNew);
      localStorage.setItem("divices", JSON.stringify(devicesNew));
    }
  }
  const [newDivice, setNewDivice] = useState("");
  useEffect(() => {
    const savedDivices = localStorage.getItem("divices");
    setDivices(
      savedDivices
        ? JSON.parse(savedDivices)
        : ["iphone1", "iphone2", "iphone3"]
    );
  }, []);
  return (
    <div
      style={{
        border: "1px solid #c43b3b",
      }}
    >
      <h3>Phones</h3>
      <ul>{divicesList}</ul>
      <input
        type="text"
        name="txt"
        id="newD"
        value={newDivice}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setNewDivice(event.target.value)
        }
      />
      <button
        className=" text-2xl p-0.5 m-1"
        onClick={() => {
          setDivices(newDivice !== "" ? [...divices, newDivice] : [...divices]);
          localStorage.setItem(
            "divices",
            JSON.stringify(divices.concat(newDivice))
          );
          setNewDivice("");
        }}
      >
        Add
      </button>
    </div>
  );
}
