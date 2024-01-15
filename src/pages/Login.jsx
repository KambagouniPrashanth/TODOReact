import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Login() {
    let {login}=useContext(UserContext)
  return (
    <div>
        <h1>Login</h1>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login