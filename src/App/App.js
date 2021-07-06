import React, { useState } from 'react';
import TimerSettings from '../TimerSettings/TimerSettings.js';

import './App.css';

function App() {

  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  document.title = sessionLength + ':00';


  return (
    <div className="App">
      <div class="timer__progress-bar"></div>
      <h1 class="timer__main">{sessionLength}:00</h1>
      <div class="timer__controls">
      </div>
      <TimerSettings />
    </div>
  );
}


export default App;
