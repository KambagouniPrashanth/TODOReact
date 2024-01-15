import { createContext } from "react";
import TodoProvider from "./TodoContext";
import UserProvider from "./UserContext";

export const GlobalContext=createContext();


 function GlobalProvider({children}){

        <UserProvider>
            <TodoProvider>
                {children}

            </TodoProvider>

        </UserProvider>


}
export default GlobalProvider;