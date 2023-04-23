import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Routalise</h1>
      <p className="read-the-docs">
        <i>Project</i> besar untuk kamu sedang digarap.{" "}
        <i>Please stay tuned 😊</i>
      </p>
    </>
  );
}

export default App;
