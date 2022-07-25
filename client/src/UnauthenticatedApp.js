import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
// import Signup from './Signup'
// import TodoList from './TodoList'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    //   <Route exact path="/"/>
    //     {/* <TodoList/> */}
    //   {/* <Redirect to="/" /> */}
    // </Routes>
    <>
    <Login setCurrentUser={setCurrentUser} />
    {/* <Signup setCurrentUser={setCurrentUser}/> */}
    </>
  )
}

export default UnauthenticatedApp