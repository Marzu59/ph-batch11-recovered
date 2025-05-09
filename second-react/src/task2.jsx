import { Component, use, useRef, useState } from "react"

export default function DisplayShowORhide(){
    const [text, setText] = useState('')
    const [insideButton, setinsideButton ]= useState('show')
    const divReferance = useRef(null)

    function showMessge(){
        const textShow = 'welcome to learn react'
        setText(textShow) 
           const changtextintoButton = 'hide';
           setinsideButton(changtextintoButton)
       
           hideMessege()
    }
  
    function hideMessege(){
        if(insideButton === 'hide'){
            divReferance.current.style.display= 'none'
            
        }
    }

    return (   
        <div ref={divReferance}>
            <h2>{text}</h2>
        <button onClick={showMessge}>{insideButton}</button>
          




        </div>

    )
}











