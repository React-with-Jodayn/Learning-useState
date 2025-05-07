import "./App.css";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import MyForm from "./MyForm";
import UsingArraysAsStateInTheComponent from "./UsingArraysAsStateInTheComponent";
import SetMultipleTimes from "./SetMultipleTimes";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="grid grid-cols-2 gap-4 my-4">
        <MyButton />
        <MyInput />
        <MyForm />
        <UsingArraysAsStateInTheComponent />
      </div>
      <SetMultipleTimes />
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Reset
      </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
