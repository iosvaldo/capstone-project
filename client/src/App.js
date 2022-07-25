import React, { useState, useEffect } from 'react';
import './App.css';
import Room from './Room';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import {Routes , Route} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';
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
    <Routes>
    <Route path="/" element={
        currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}/>) : (
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser} />
        )
       }/>
    <Route path='/signup'element={<Signup/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path="/rooms/:id" element={<Room currentUser={currentUser} />}/>
    </Routes>
    
  )
}

export default App;
