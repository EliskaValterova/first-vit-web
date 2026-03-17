import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as d3 from "d3";

function App() {
  const [count, setCount] = useState(0);
  const data = [4, 8, 15, 16, 23, 42, 88];
  console.log("Max:", d3.max(data));
  return (
    <>
      <h1>Ciao</h1>
      <p>Maximalni hodnota je: {d3.max(data)}</p>
    </>
  );
}

export default App;
