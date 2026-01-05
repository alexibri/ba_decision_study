import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import supabase from './supabase-client'


function App() {

  const onClickTest = () => {
    console.log(import.meta.env.VITE_SUPABASE_URL);
    console.log(import.meta.env.VITE_SUPABASE_ANON_KEY);
  }

  
  return (
    <>
      <div>
        <input onClick={onClickTest}></input>
      </div>
    </>
  )
}

export default App
