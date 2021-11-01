import React, { useContext, useState, useEffect } from 'react'
import { useTimer, auto } from 'react-timer-hook'
import PomodoroContext from '../context/pomodoro-context'

export default function Timer({ expiryTimestamp, autoStart }) {
  const { sessionLength } = useContext(PomodoroContext)
  const [startTimer, setStartTimer] = useState(false)
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart,
    onExpire: () => console.warn('onExpire called'),
  })

  function handleStartStop() {
    if (startTimer) {
      pause()
      setStartTimer(false)
    } else {
      resume()
      setStartTimer(true)
    }
  }

  useEffect(() => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + sessionLength * 60)
    restart(time, autoStart)
  }, [sessionLength])

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 id="timer-label">Session</h2>
      <div style={{ fontSize: '100px' }} id="time-left">
        <span>{minutes <= 9 && 0}</span>
        <span>{minutes}</span>:<span>{seconds <= 9 && 0}</span>
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button id="start_stop" onClick={handleStartStop}>
        Start/Stop
      </button>
      <button
        id="reset"
        onClick={() => {
          // Restarts to 25 minutes timer
          const time = new Date()
          time.setSeconds(time.getSeconds() + 1500)
          restart(time, autoStart)
        }}
      >
        Restart
      </button>
    </div>
  )
}
