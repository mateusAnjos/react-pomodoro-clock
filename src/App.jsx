import { useState } from 'react'
import './App.css'
import Timer from "./Timer"
import Settings from "./Settings"
import SettingsContext from './SettingsContext'


function App() {
  
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes: workMinutes, //Já que ambos tem o mesmo nome, poderia remover o conteudo após os dois pontos e deixar apenas o conteudo anterior
        breakMinutes: breakMinutes,
        setWorkMinutes,
        setBreakMinutes,

      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  )
}

export default App
