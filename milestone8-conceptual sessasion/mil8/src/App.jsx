import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <h1>Vite + React</h1>
      <button className='btn btn-primary'>hello</button>
     <Outlet />
    
      
    </>
  )
}

export default App
