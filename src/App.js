import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {MyComp} from "./MyComp"; 

import {SomeContext} from "./Context"; 

function App() {
  return (
    <SomeContext.Provider value = {{foo: "f", bar: "b", nested: {bish: "bosh"}}}>
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
            Learn React
          </a>

          <MyComp/> 
        </header>
      </div>
    </SomeContext.Provider>
  );
}

export default App;
