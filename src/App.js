import logo from './logo.svg'
import './App.css'
import { Break } from './components/Break'
import { Session } from './components/Session'
import { useState, useEffect } from 'react'
import PomodoroContext from './context/pomodoro-context'
import Timer from './components/Timer'

function App() {
  const [sessionLength, setSessionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const time = new Date()
  time.setSeconds(time.getSeconds() + sessionLength * 60)

  return (
    <div class="App">
      <PomodoroContext.Provider
        value={{
          sessionLength,
          setSessionLength,
          breakLength,
          setBreakLength,
        }}
      >
        <h1>Pomodoro Clock</h1>
        <Timer expiryTimestamp={time} autoStart={false} />
        <Break />
        <Session />
      </PomodoroContext.Provider>
    </div>
  )
}

export default App
