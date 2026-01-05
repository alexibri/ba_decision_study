import { useState } from 'react'
import supabase from './supabase-client'


function App() {
 
  return (
    <>
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/scenario/:id" element={<Scenario />}/>
        <Route path="/end" element={<End />}/>
      </Routes>
      </main>
    </>
  )
}

export default App
