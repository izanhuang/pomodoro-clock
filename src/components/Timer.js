import React, { useContext, useState, useEffect } from 'react'
import PomodoroContext from '../context/pomodoro-context'
import '../styles/Timer.css'

export default function Timer({}) {
  const {
    sessionLength,
    setSessionLength,
    breakLength,
    setBreakLength,
    isRunning,
    setIsRunning,
  } = useContext(PomodoroContext)

  const [timerLabel, setTimerLabel] = useState('Session')
  const [audio, setAudio] = useState(new Audio())
  const [minutes, setMinutes] = useState(sessionLength)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (timerLabel === 'Session') {
      setMinutes(sessionLength)
    } else {
      setMinutes(breakLength)
    }
  }, [sessionLength, breakLength])

  useEffect(() => {
    if (isRunning) {
      let timeout = setTimeout(() => {
        if (minutes > 0) {
          if (seconds === 0) {
            setMinutes(minutes - 1)
            setSeconds(59)
          } else {
            setSeconds(seconds - 1)
          }
        }
        if (minutes === 0) {
          if (seconds === 0) {
            clearTimeout(timeout)
            audio.play()
            switchTimer()
          } else {
            setSeconds(seconds - 1)
          }
        }
      }, 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  })

  function switchTimer() {
    if (timerLabel === 'Session') {
      setTimerLabel('Break')
      setMinutes(breakLength)
    } else {
      setTimerLabel('Session')
      setMinutes(sessionLength)
    }
  }

  function handleStartStop() {
    setIsRunning(!isRunning)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 id="timer-label">{timerLabel}</h2>
      <div id="time-left">
        <span>{minutes <= 9 && 0}</span>
        <span>{minutes}</span>:<span>{seconds <= 9 && 0}</span>
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button id="start_stop" onClick={handleStartStop}>
        Start/Pause
      </button>
      <button
        id="reset"
        onClick={() => {
          audio.pause()
          audio.currentTime = 0
          setTimerLabel('Session')
          setMinutes(25)
          setSeconds(0)
          setSessionLength(25)
          setBreakLength(5)
          setIsRunning(false)
        }}
      >
        Restart
      </button>
      <audio
        id="beep"
        ref={(audio) => setAudio(audio)}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  )
}
