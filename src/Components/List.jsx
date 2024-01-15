import React, { useContext } from 'react'
import TODO from './TODO'
import { TodoContext } from '../context/TodoContext'

function List() {
  const {todos}=useContext(TodoContext)
  return (
    <div className='list'>
        <h1>All Todos</h1>
       

        <div className='todos'>
           
         
             {todos.map((todo,i)=>(
                <TODO todo={todo} index={i} key={i} />
           
            ))} 

            

        </div>

      
        
        
       

        
        
    </div>
  )
}

export default List