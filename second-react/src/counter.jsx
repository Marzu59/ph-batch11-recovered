import { useState } from "react"

export default function Counter(){
    const countStyle ={
        border:'2px solid yellow'
    }
    const  [count,setCount] = useState(0) 
    
    const handleOn =()=>{
       const rightCount = count  + 1;
       setCount(rightCount)
    }

    return(
        <div style={countStyle}>
            <h3>Count:{count} </h3>
            <button onClick={handleOn}>Add</button>
        </div>
    )
}