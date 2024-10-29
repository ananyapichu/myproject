import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './Components/State'
import Counter from './Components/counter'
import DisplayName from './Components/DisplayName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  <Routes>
    <Route path='/s' element={<State/>}/>
    <Route path='/c' element={<Counter/>}/>
    <Route path='/n' element={<DisplayName/>}/>
  </Routes>
  </>
  )
}

export default App
