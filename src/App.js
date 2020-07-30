import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Component/Clock';

function App() {
  return (
    <div className="App">
      <h1> STOPWATCH</h1>
     <Clock />

     <h2>
         <li>Click Start button to Start the Stopwatch</li>
         <li>Click Pause button to Pause the Stopwatch</li>
         <li>Click Reset button to Restart the Stopwatch from 0</li>
     </h2>
    </div>
  );
}

export default App;
