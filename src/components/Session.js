import React, { useState, useContext, useEffect } from 'react'
import PomodoroContext from '../context/pomodoro-context'
import '../App.css'

export const Session = ({}) => {
  const { sessionLength, setSessionLength, isRunning } = useContext(
    PomodoroContext,
  )
  const [decrementDisabled, setDrecementDisabled] = useState(false)
  const [incrementDisabled, setIncrementDisabled] = useState(false)

  const handleDecrement = () => {
    if (!isRunning) {
      if (sessionLength - 1 < 1) {
        setSessionLength(sessionLength - 1)
        setDrecementDisabled(true)
      } else {
        setSessionLength(sessionLength - 1)
      }
    }
  }

  const handleIncrement = () => {
    if (!isRunning) {
      if (sessionLength + 1 === 2) {
        setSessionLength(sessionLength + 1)
        setDrecementDisabled(false)
      } else if (sessionLength + 1 === 60) {
        setSessionLength(sessionLength + 1)
        setIncrementDisabled(true)
      } else {
        setSessionLength(sessionLength + 1)
      }
    }
  }

  return (
    <div>
      {/* <h2 id="session-length">{sessionLength}</h2> */}
      <p id="session-label">Session Length: {sessionLength}</p>
      <button
        id="session-decrement"
        className="decrement"
        disabled={sessionLength <= 1 ? true : decrementDisabled}
        onClick={handleDecrement}
      >
        -
      </button>
      <button
        id="session-increment"
        className="increment"
        disabled={sessionLength >= 60 ? true : incrementDisabled}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
}
