import supabase from './supabase-client'
import {Routes,Route, Navigate} from "react-router-dom"

import Start from './pages/Start'
import Scenario from './pages/Scenario'
import End from './pages/End'

function App() {
  return (
    <>
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/scenario/:id" element={<Scenario />}/>
        <Route path="/scenario/1/dark2" element={<Dark2 />} />
        <Route path="/end" element={<End />}/>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </main>
    </>
  )
}

export default App
