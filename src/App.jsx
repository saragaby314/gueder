import { useState } from 'react'
import Polen from './components/Polen'
import './App.css'
import Calidad from './components/Calidad'
import Header from "./components/Header"

function App() {
  return (
    <>
    
    <div>
      <Header />
    </div>

    <div>
      <Polen />
    </div>

    <div>
      <Calidad />
    </div>
    </>
  )
}

export default App

