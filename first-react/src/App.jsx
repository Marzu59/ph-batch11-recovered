import { useState } from 'react'


import './App.css'

import Actor from './actor';
import singer from './singer';
import Singer from './singer';


function App() {
  const [count, setCount] = useState(0)
  const actors = ['razzak', 'asif', 'bapparz']
  // const timee = 50;
  const singers=[
    {id: 1, name: 'Mahfuz', },
    {id: 2, name: 'Hafiz', },
    {id: 3, name: 'Tahsan', }
  ]
  return (
    <>
      <h1>Learn react core core concepts</h1>
        
  {  singers.map(singer=> <Singer name={singer.name} id={singer.id}   /> )

  }
     



      {
        actors.map(actor => <Actor name={actor} />)

        
        
      }



    {/* 
     <Todo task="learn react" isDone={true} time="100" ></Todo>
     <Todo task="learn express.js"isDone={false} time={timee} ></Todo> */}



      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vito + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
         <Student></Student>

         <Person></Person>
      </div>
      <div className='bg'>
   <h1>Greetings!!</h1>
   <Eidsalmi name="Mahmud" Amount="200" ></Eidsalmi>
   <br />
   <Eidsalmi name="Ahmed" Amount="500"></Eidsalmi>
</div> */}
    </>
  )
}



// function Student(){
//   return (

//     <div className='stu'>
//     <h1>Hello everyONe</h1>
//     <button>Click</button>
//     <Developer name="Najim" tech="python"></Developer>
//     <Developer name="Mahin" tech="javascript"></Developer>
 
//     </div>
//   )
  
// }
// function Person(){
//   const age = 17
//   const personStyle = {
//     backgroundColor: 'green'
//   }
//   const name = "Solim"
//   return (
//     <div style={personStyle} >

//       <h1>Name: {name}</h1>
//       <p className='bg'>age {age} </p>

//     </div>
//   )
// }
// function Developer(props){
//   console.log(props)
  
//   return(
//     <div style={{
//       border: '2px',
//       backgroundColor: 'orange'
//     }}>
//       <h3>developer: {props.name} </h3>
//       <p>Technology: {props.tech} </p>
//     </div>
//   )
  
// }

// function Eidsalmi({name, Amount}){

//   return(
//     <div>
//        <h1>Receiver: {name} </h1> 
//        <p>TK:{Amount} </p>

//        </div>
//   )
// }




export default App
