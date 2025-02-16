import React from "react";
import Dictionary from "./components/Dictionary";
import DarkModeToggle from "./components/DarkModeToggle";
import "./styles/styles.css";

const App = () => {
  return (
    <div className="app-container">
      <DarkModeToggle />
      <h1 className="title">📖 Dictionary App</h1>
      <Dictionary />
    </div>
  );
};

export default App;