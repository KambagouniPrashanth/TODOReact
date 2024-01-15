import { createContext,useState } from "react";

export const UserContext=createContext();

export  default  function UserProvider({children}){
    const[user,setUser]=useState(null)

    const login=()=>{
        setTimeout(()=>{
        setUser({
            name:"Prashanth"
        })

        },2000)
    }

    const logout=()=>{
        setUser(false);
    }


    <UserContext.Provider value={{
        user,
        login,
        logout,

    }}>
        {children}
        
    </UserContext.Provider>

}