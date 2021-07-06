import React from 'react';
import './TimerChoices.css';
import TimerChoice from '../TimerChoice/TimerChoice';

const TimerChoices = (props) => {

  const handleChange = ({ target }) => {
    // alert(target.value);
    props.setSessionLength(target.value);
  }

  return (
    <form class="timer-settings__choices" onChange={handleChange}>
      <TimerChoice step="5" selected="false" />
      <TimerChoice step="10" selected="false" />
      <TimerChoice step="15" selected="false" />
      <TimerChoice step="20" selected="false" />
      <TimerChoice step="25" selected="true" />
      <TimerChoice step="30" selected="false" />
      <TimerChoice step="35" selected="false" />
      <TimerChoice step="40" selected="false" />
      <TimerChoice step="45" selected="false" />
      <TimerChoice step="50" selected="false" />
      <TimerChoice step="55" selected="false" />
      <TimerChoice step="60" selected="false" />
    </form>
  )
}

export default TimerChoices;