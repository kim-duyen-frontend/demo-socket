import React, { useEffect } from "react";
import { io } from "socket.io-client";
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const socket = io("http://localhost:4000", {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });
    socket.on("firstEvent", (msg) => {
      console.log(msg);
    });
  }, [])
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
