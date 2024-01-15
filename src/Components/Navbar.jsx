import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Navbar() {
  const {user}=useContext(UserContext)
  return (
    <div className='nav'>
        <ul>
            <li>Home</li>
           
            <li>Login</li>

        </ul>


    </div>
  )
}

export default Navbar