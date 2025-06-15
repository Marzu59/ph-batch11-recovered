


import './App.css'
import Users from './Users'


const  userPromise = fetch('http://localhost:2000/users')
.then(res=>res.json())

function App() {
  

  return (
    <>
    
    <h1>User management application</h1>
    <Users userPromise={userPromise}/>
    </>
  )
}

export default App
