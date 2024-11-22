import {useState} from 'react'

const Form = () => {
    const [firstname,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")


    const handleSubmit=(e)=>{
        e.preventDefault()
        const all={
            name:firstname,
            email:email,
            password:password
        }
        console.log(all);
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name="name" value={firstname} onChange={(e)=>setname(e.target.value)}/>
        <input type='email' name="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type='password' name="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
