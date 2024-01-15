import React, { createContext, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function TODO({todo,index}) {
    
    const {deleteTodo}=useContext(TodoContext)    
    
    const hadnleDelete=()=>{
        deleteTodo(index)

    }
  return (
       
           <div className='todo' key={index}>
               <p>ID: {index+1}</p>
               <p>Title: {todo.title}</p>
               <div className='buttons'>
                   <button>Edit</button>
                   <button onClick={hadnleDelete}>Delete</button>
               </div>
           </div>



  )
}

export default TODO