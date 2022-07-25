import React, { useState, useEffect } from 'react';
import './App.css';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  const [currentUser,setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect (()=> {
    fetch("/me",{
      credentials: 'include'
    })
    .then(res => {
      if (res.ok){
        res.json().then((user) => {
          setCurrentUser(user)
          setAuthChecked(true)
        })
      } else {
        setAuthChecked(true)
      }
    })
  },[])

if (!authChecked) { return <div className="todo-app">
  </div> }
  
    return (    
    <Router>
    
        {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}/>) : (
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser} />
        )
      } 
      
    
    </Router>
    
  )
}

export default App;
