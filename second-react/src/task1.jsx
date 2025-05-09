import { useState } from "react"

export default function Task1(){
  const  cardStyle = {border:'2px solid yellow',
                       backgroundColor: 'yellow'
                        
  }
     const [number, setNumber] = useState(0)

     const handleCount = ()=>{
        const oneIncrease = number + 1;
          setNumber(oneIncrease)
     }

     const handleCount2 = ()=>{
        const onedcrease = number - 1;
          setNumber(onedcrease)
     }
  
     const resetHandle = ()=>{       
        // setNumber(0)
        const restNumber = 0;
        setNumber(restNumber)

     }


    return(

        <div style={cardStyle}>
          <h3> RightnowCount: {number} </h3>
          <button onClick={handleCount}>click to increase 1</button>
          <button onClick={handleCount2}> click for decrease 1</button>
          <button onClick={resetHandle}>Reset</button>
           
        </div>
    )
}