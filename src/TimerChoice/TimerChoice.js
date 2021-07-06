import React from 'react';

const TimerChoice = (props) => {
  return (
      <label for={`sessions_${props.step}`}>
         <input id={`sessions_${props.step}`} name="session" type="radio" value={props.step} />
         <span>{props.step}m</span>
      </label>
  )
  
}

export default TimerChoice; 