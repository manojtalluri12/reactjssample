import {useState} from 'react'

const Todo = () => {
    const [list,setlist]=useState([])
    const [edit,setedit]=useState({
        id:"",
        isEditing:false
    })
    const [msg,setmsg]=useState({
        text:"",
        id:""
    })
    const handlemessage=(e)=>{
        setmsg({
            ...msg,
            text:e.target.value,
        })
    }
    const handleAdd=(e)=>{
        e.preventDefault()
        let todo={
            text:msg.text,
            id:new Date().getTime().toString(),
        }
        setlist([...list,todo])
        setmsg({
            text:"",
            id:""
        })
    }
    const handledelete=(id)=>{
        const fill=list.filter((each)=>{
            return each.id !== id
        })
        setlist(fill)
    }
    const handledit=(id)=>{
        console.log(id);
        const edit=list.find(each=>each.id === id)
        setmsg({
            text:edit.text,
            id:edit.id
        })
        setedit({
            ...edit,
            id:edit.id,
            isEditing:true
        })
    }
    const handlesave=(e)=>{
        e.preventDefault()
        const newone=list.map((each)=>{
            if(each.id === edit.id){
                return {
                    text:msg.text,
                    id:each.id
                }
            }
            else{
                return each
            }
        })
        setmsg({
            text:"",
            id:""
        })
        setedit({
            id:"",
            isEditing:false
        })
        setlist(newone)
    }
  return (
    <div>
      <form>
        <input type='text' name='name' value={msg.text} onChange={handlemessage}/>
        {
            edit.isEditing ? (<button onClick={handlesave}>SAVE</button>) :(<button onClick={handleAdd}>ADD</button>)
        }
      </form>
      <hr/>
      {
        list.map((each)=>{
            const {id,text}=each
            return <div key={id}>
                <h1>{text}</h1>
                <button onClick={()=>handledelete(id)}>delete</button>
                <button onClick={()=>handledit(id)}>edit</button>
            </div>
        })
      }
    </div>
  )
}

export default Todo
