import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';

function Form() {
    const[title,setTitle]=useState("");
   
    const{addTodo}=useContext(TodoContext)

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(title)
       
    }
  return (
    <div className='form'>
        <h1>TodoList</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='todo'value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form