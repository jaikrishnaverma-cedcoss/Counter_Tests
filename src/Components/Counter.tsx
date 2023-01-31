import React, { useState } from 'react'

const Counter = () => {
 const [counter,setCounter]=useState(1)

//  counter function for both action incr/decr
const Counter=(event:React.SyntheticEvent)=>{
    const btnId=event.currentTarget.id
    if(btnId==='button1'){
    (counter>1)?setCounter(prev=>prev-1):setCounter(counter)
    }
    if(btnId==='button3'){
    setCounter(prev=>prev+1)
    }
}

  return (
        <div className="capsule">
            <button data-testid='button1' id='button1' onClick={Counter} className="btn">-</button>
            <button data-testid='button2' id='button2' className="btn">{counter}</button>
            <button data-testid='button3' id='button3' onClick={Counter} className="btn">+</button>
        </div>
   
  )
}

export default Counter