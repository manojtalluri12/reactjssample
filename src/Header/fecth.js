import {useState} from 'react'

const Fecth = () => {
    const dat=[
        {
            "id": 1,
            "title": "uuuuuuuuuuuuuuuuuuuuuuu",
            "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "category": "beauty",
            "price": 9.99,
            "discountPercentage": 7.17,
            "rating": 4.9
        },
        {
            "id": 11,
            "title": "Princess",
            "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "category": "beauty",
            "price": 9.99,
            "discountPercentage": 7.17,
            "rating": 4.9
        },
        {
            "id": 111111,
            "title": "Essence Mascara Lash Princess",
            "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "category": "beauty",
            "price": 9.99,
            "discountPercentage": 7.17,
            "rating": 4.9
        }
        ]
    const [data,setdata]=useState(dat) 
    const handledelete=(id)=>{
        const fill=data.filter((each)=>each.id !== id)
        setdata(fill)
    }   
  return (
    <div>
      <ul>
        {
            data.map((data)=>{
                const {title,price,id}=data
                return (<div key={id}>
                    <h1>{title}</h1>
                    <p>{price}</p>
                    <button onClick={()=>handledelete(id)}>delete</button>
                </div>)
            })
        }
        
      </ul>
    </div>
  )
}

export default Fecth
