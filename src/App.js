import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <button id="Start">Start</button>
       <button id="Stop">Stop</button>
       <div id="clock">
         <span id="minutes"></span>:
         <span id="seconds"></span>:
         <span id="milliseconds"></span>
       </div>
       <button id="Restart">Restart</button>
       <p>wow this is so cool</p>
      </header>
    </div>
  );
}

export default App;
