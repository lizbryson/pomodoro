import React, { useState } from 'react';

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
      <div class="timer__settings">
        <div>Tomato Timer</div>

      </div>
    </div>
  );
}


export default App;
