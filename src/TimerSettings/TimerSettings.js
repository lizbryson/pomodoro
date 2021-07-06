import { render } from '@testing-library/react';
import React from 'react';
import TimerChoices from '../TimerChoices/TimerChoices';

const TimerSettings = () => {
 
    return (
       <div class="timer__settings">
        <div>Tomato Timer</div>
        <div class="timer-settings__lengths">
          <div class="timer-settings__sessions">
            <TimerChoices />
            Sessions: 25 Minutes +</div>
          <div class="timer-settings__breaks">Breaks: 5 Minutes +</div>
        </div>
      </div>
    )
  
}

export default TimerSettings;
