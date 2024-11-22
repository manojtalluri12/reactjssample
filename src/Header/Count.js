import { useState } from 'react'

const Count = () => {
    const [count,setcount]=useState(0)
    const handledecrement =()=>{
        setcount((s)=>s-1)
    }
    const handleIncrement =()=>{
        setcount((s)=>s+1)
    }
  return (
    <div className='diplay'>
      <button onClick={handledecrement}>-</button>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Count
