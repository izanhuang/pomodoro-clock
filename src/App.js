import './App.css'
import { Break } from './components/Break'
import { Session } from './components/Session'
import { useState } from 'react'
import PomodoroContext from './context/pomodoro-context'
import Timer from './components/Timer'

function App() {
  const [sessionLength, setSessionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [isRunning, setIsRunning] = useState(false)

  return (
    <div className="App">
      <PomodoroContext.Provider
        value={{
          sessionLength,
          setSessionLength,
          breakLength,
          setBreakLength,
          isRunning,
          setIsRunning,
        }}
      >
        <h1>Pomodoro Clock</h1>
        <div className="clock">
          <Timer />
          <div className="break-session">
            <Break />
            <Session />
          </div>
        </div>

        <footer>Created by Izan Huang</footer>
      </PomodoroContext.Provider>
    </div>
  )
}

export default App
