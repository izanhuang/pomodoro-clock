import React, { useState, useContext, useEffect } from 'react'
import PomodoroContext from '../context/pomodoro-context'

export const Break = ({}) => {
  const { breakLength, setBreakLength, isRunning } = useContext(PomodoroContext)
  const [decrementDisabled, setDrecementDisabled] = useState(breakLength === 1)
  const [incrementDisabled, setIncrementDisabled] = useState(false)

  const handleDecrement = () => {
    if (!isRunning) {
      if (breakLength - 1 === 1) {
        setBreakLength(breakLength - 1)
        setDrecementDisabled(true)
      } else {
        setBreakLength(breakLength - 1)
        setDrecementDisabled(false)
      }
    }
  }

  const handleIncrement = () => {
    if (!isRunning) {
      if (breakLength + 1 >= 2) {
        setBreakLength(breakLength + 1)
        setDrecementDisabled(false)
      } else if (breakLength + 1 === 60) {
        setBreakLength(breakLength + 1)
        setIncrementDisabled(true)
      } else {
        setBreakLength(breakLength + 1)
      }
    }
  }

  useEffect(() => {
    setDrecementDisabled(false)
  }, [breakLength === 5])

  return (
    <div>
      {/* <h2 id="break-length">{breakLength}</h2> */}
      <p id="break-label">Break Length: {breakLength}</p>
      <button
        id="break-decrement"
        className="decrement"
        disabled={breakLength <= 1 ? true : decrementDisabled}
        onClick={handleDecrement}
      >
        -
      </button>
      <button
        id="break-increment"
        className="increment"
        disabled={breakLength >= 60 ? true : incrementDisabled}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
}
