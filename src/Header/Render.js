import {useState} from 'react'

const Render = () => {
    const [check,setcheck]=useState(false)
    const handlecheck=()=>{
        setcheck (!check)
    }
  return (
    <div>
        <button onClick={handlecheck}>{check ?  "hide" : "show" }</button>
        {
            check && <div>
                lorem
            </div>
        }
    </div>
  )
}

export default Render
