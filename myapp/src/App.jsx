import { useState } from 'react'
import './App.css'
import Gridget from './components/Gridget'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>welcome react</h1>
     {/* <Gridget/> */}
     <Navbar/>
     <Routes>
      <Route path='/pro' element={<Gridget/>}/>
      <Route path='/p' element={<Products/>}/>
     </Routes>
     <Products/>

    </>
  )
}

export default App
