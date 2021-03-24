import './App.css';
import React, { useState } from "react";
// import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import MapChart from "./components/MapChart";
import NavBar from "./components/NavBar"

function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <NavBar />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
