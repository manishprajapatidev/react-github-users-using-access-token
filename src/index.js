import React, { useState } from "react";
import ReactDOM from "react-dom";
import List from "./List";
import "./styles.css";

function App() {
  const [load, setLoad] = useState(false);

  const loadUsers = () => {
    setLoad(true);
  };

  return (
    <div className="App">
      <button onClick={loadUsers}>Load Users</button>
      {load ? <List /> : null}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
