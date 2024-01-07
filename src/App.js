import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FetchCSVData from "./Components/FetchCSVData";

const App = () => {
  const fetchData = () => {
    FetchCSVData.fetchCSVData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Count of signatures
        </a>
        <FetchCSVData />
      </header>
    </div>
  );
};

export default App;
