import { render } from '@testing-library/react';
import React from 'react';
import TimerChoices from '../TimerChoices/TimerChoices';

const TimerSettings = (props) => {
 
    return (
       <div class="timer__settings">
        <div>Tomato Timer</div>
        <div class="timer-settings__lengths">
          <div class="timer-settings__sessions">
            <TimerChoices setSessionLength={ props.setSessionLength } />
            Sessions: { props.sessionLength } Minutes +</div>
          <div class="timer-settings__breaks">Breaks: 5 Minutes +</div>
        </div>
      </div>
    )
  
}

export default TimerSettings;
