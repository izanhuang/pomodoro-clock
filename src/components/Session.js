import React, { useState, useContext } from 'react'
import PomodoroContext from '../context/pomodoro-context'

export const Session = (props) => {
  const { sessionLength, setSessionLength } = useContext(PomodoroContext)
  const [decrementDisabled, setDrecementDisabled] = useState(false)
  const [incrementDisabled, setIncrementDisabled] = useState(false)

  const handleDecrement = () => {
    if (sessionLength - 1 === 1) {
      setSessionLength(sessionLength - 1)
      setDrecementDisabled(true)
    } else {
      setSessionLength(sessionLength - 1)
    }
  }

  const handleIncrement = () => {
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

  return (
    <div>
      <h2 id="session-length">{sessionLength}</h2>
      <p id="session-label">Session Length</p>
      <button
        id="session-decrement"
        disabled={decrementDisabled}
        onClick={handleDecrement}
      >
        -
      </button>
      <button
        id="session-increment"
        disabled={incrementDisabled}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
}
