import { createContext } from "react";
import { useState } from "react";

export const  TodoContext=createContext();

export default function TodoProvider({children}){
   //all the declaration and main function are created here and these function are like global we can access it anywher in the project by using usecontext
    const[todos,setToDo]=useState([
        {title:"Title 1"},
        {title:"Title 2"}
    
      ])
      
      const addTodo=(title)=>{
        let temp=[...todos];
            temp.push({
              title
            });
        setToDo(temp)
      }
      
      
      const deleteTodo=(index)=>{
        let temp=[...todos];
        temp.splice(index,1);
        setToDo(temp)
      }
    

    return<TodoContext.Provider value={{
        todos,
        addTodo,
        deleteTodo,
    }}>
        {children}
    </TodoContext.Provider>

}