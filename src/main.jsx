import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from './context/UserContext.jsx'
import TodoProvider from './context/TodoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
            <TodoProvider>
                <App/>

            </TodoProvider>

    </UserProvider>
    
    
  </React.StrictMode>,
)
