import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup({setCurrentUser}) {

//  const history = useHistory()
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [passwordConfirmation, setPasswordConfirmation] = useState('')
 const [ displayError, setDisplayError] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()
  fetch('/signup', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      username,
      password,
      password_confirmation: passwordConfirmation
    })
  }) 
    .then(res => {
      if (res.ok) {
      res.json().then(user => {
        setCurrentUser(user)
        // history.push('/signup')
      })
      } else {
        res.json().then(e => {
          setDisplayError(e.errors.join(', '))
          // setDisplayError(Object.entries(e.errors).flat())
        })
      }
    })
 }
  return (
    <div>
      <h1>Developer Chat App</h1>
      <form className="box" onSubmit={handleSubmit}>
        <h1 className="text-center">Sign Up</h1>
          <div className="input-container">
            <input 
            required
            type="text" 
            name="username"
            value={username}
            onChange={(e) => {
              setDisplayError("")
              setUsername(e.target.value)}
            }/>
            <label htmlFor="username">User Name</label>		
          </div>

          <div className="input-container">		
            <input 
            required
            type="password" 
            name=""
            value={password}
            onChange={(e)=> {
              setDisplayError("")
              setPassword(e.target.value)}
            }/>
            <label>Password</label>
          </div>

           <div className="input-container">		
            <input 
            required
            type="password" 
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e)=> {
              setDisplayError("")
              setPasswordConfirmation(e.target.value)}
            }/>
            <label>Password Confirmation</label>
          </div>
          <p>{displayError}</p>
          <div className="btn-container">
            <button className="btn-29" type="submit">Sign Up</button>
            <p>-- or --</p>
            <Link type="submit" className="btn-29" to="/login">Log In</Link>
          </div>
          <p>Please Log In or Sign Up</p>
      </form>	

    </div>
  )
}

export default Signup