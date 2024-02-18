import { useState,useContext } from 'react'

import Navbar from './Components/Navbar';
import Form from './Components/Form';import List from './Components/List';
import Home from './pages/Home'
import { UserContext } from './context/UserContext'


function App(){
  return(
    <>
    <Navbar/>
    <Form/>
    <List/>


    </>
  )
}

  
   

export default App
