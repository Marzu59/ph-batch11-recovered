// import { useState } from 'react'

import { Suspense } from 'react'
import './App.css'
import Botttols from './components/botttols'

const bottlesPromise = fetch('../public/public-bottls.json').then(res=>res.json())
                      

function App() {

  

  return (
    <>
      

      <h1>Buy Awsonme bottle</h1>
      <Suspense fallback={<h3>botttols are loading</h3>}>
        <Botttols bottlesPromise={bottlesPromise}></Botttols>
      </Suspense>
     
    </>
  )
}

export default App
