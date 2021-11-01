import React, { useState, useContext } from 'react'
import PomodoroContext from '../context/pomodoro-context'

export const Break = () => {
  const { breakLength, setBreakLength } = useContext(PomodoroContext)
  const [decrementDisabled, setDrecementDisabled] = useState(false)
  const [incrementDisabled, setIncrementDisabled] = useState(false)

  const handleDecrement = () => {
    if (breakLength - 1 === 1) {
      setBreakLength(breakLength - 1)
      setDrecementDisabled(true)
    } else {
      setBreakLength(breakLength - 1)
    }
  }

  const handleIncrement = () => {
    if (breakLength + 1 === 2) {
      setBreakLength(breakLength + 1)
      setDrecementDisabled(false)
    } else if (breakLength + 1 === 60) {
      setBreakLength(breakLength + 1)
      setIncrementDisabled(true)
    } else {
      setBreakLength(breakLength + 1)
    }
  }

  return (
    <div>
      <h2 id="break-length">{breakLength}</h2>
      <p id="break-label">Break Length</p>
      <button
        id="break-decrement"
        disabled={decrementDisabled}
        onClick={handleDecrement}
      >
        -
      </button>
      <button
        id="break-increment"
        disabled={incrementDisabled}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
}
