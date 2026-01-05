import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import supabase from './supabase-client'


function App() {
 
  return (
    <>
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/scenario" element={<Favorites />}/>
        <Route path="/end" element={<Favorites />}/>
      </Routes>
      </main>
    </>
  )
}

export default App
