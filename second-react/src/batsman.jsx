import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns]  = useState(0)
    const [sixAmount, setSixAmount] = useState(0)

    const handleSingle = ()=>{
        const updatedSingle = runs + 1;
        
        setRuns(updatedSingle)
    }
  const handlesix =()=>{
    const updateSIx = runs + 6;
    const updateSixesPer = sixAmount + 1;
    setSixAmount(updateSixesPer)
    setRuns(updateSIx)
  }
  const handleFour=()=>{
    const updateFOur = runs + 4;
    setRuns(updateFOur)
  }

    return(
        <div>
            {
                runs>= 50 && <p>Congrtulations you gaind  half-Century</p>
            }
            <h3>player : bangla Batsman</h3>
            <h1>Score:{runs} </h1>
            <button onClick={handleSingle}>Single run</button>
            <button onClick={handleFour}>four runs</button>
            <button onClick={handlesix}>Six runs</button>
            <h2>Six Amount: {sixAmount} </h2>
            {
                sixAmount>= 3 && <p>hattrick!!</p>
            }
        </div>
    )
}