import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import MyForm from "./MyForm";
import UsingArraysAsStateInTheComponent from "./UsingArraysAsStateInTheComponent";
import SetMultipleTimes from "./SetMultipleTimes";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <MyButton />
      <MyInput />
      <hr />
      <MyForm />

      <UsingArraysAsStateInTheComponent />

      <SetMultipleTimes />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
