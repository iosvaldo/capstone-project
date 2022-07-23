import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
// import TodoList from './TodoList'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path="/">
        {/* <TodoList/> */}
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default UnauthenticatedApp