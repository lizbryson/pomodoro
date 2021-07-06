import React from 'react';

const TimerChoices = () => {
  return (
    <form class="timer-settings__choices">
        <label for="sessions_5">
          5
          <input id="sessions_5" name="session" type="radio" value="5" />
        </label>
        <label for="sessions_10">
          10
          <input id="sessions_10" name="session" type="radio" value="10" />
        </label>
        <label for="sessions_15">
          15
          <input id="sessions_15" name="session" type="radio" value="15" />
        </label>
      </form>
  )
}

export default TimerChoices;