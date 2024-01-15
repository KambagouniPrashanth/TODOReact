import { useState,useContext } from 'react'


import Login from './pages/Login'
import Home from './pages/Home'
import { UserContext } from './context/UserContext'



function App() {
  // const {user}=useContext(UserContext)
  
  // if(user){
  //   return<Login/>
  // }
  
    return(
      <>
      <Home/>
      </>
    );

  
}

export default App
