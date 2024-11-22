import {useState,useEffect} from 'react'

const Effect = () => {
    const [name,setname]=useState('')
    const [data,setdata]=useState([])
    const fetchDrink=async(url)=>{
        const res=await fetch(url)
        const data=await res.json()
        console.log(data.drinks);
        setdata(data.drinks)
    }
    useEffect(()=>{
        const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        const base=`${url}+${name}`
        fetchDrink(base)
    },[name])
    console.log(data);
    
  return (
    <div>
      <div>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
      </div>
      <hr/>
      <div className='grid'>
        {
           data && data.map((each)=>{
                const {idDrink,strDrink,strDrinkThumb}=each
                return (<div key={idDrink} >
                    <div>
                        <img src={strDrinkThumb} alt='msmms'/>
                    </div>
                    <div>
                        <h1>{strDrink}</h1>
                    </div>
                </div>)
            })
        }
      </div>
    </div>
  )
}

export default Effect
