import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'


// |||||||| login component for any new user to the application ||||||||

function Login({setCurrentUser}) {
  // const history = useHistory();
  const navigate = useNavigate();
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [ displayError, setDisplayError] = useState('')
  
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    setDisplayError('')
    const {name, value} = e.target
    setFormData((formData) => ({...formData,
      [name]: value
    }))
      // console.log(name, value)
  }

  function handleSubmit(e){
    e.preventDefault();
    // console.log(e.target)
    // console.log(formData)
    fetch("/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(res => {
      if (res.ok) {
        res.json().then(user => {
          // console.log(user)
          setCurrentUser(user)
          navigate('/home');
        })
      } else {
        res.json().then(e => {
          setDisplayError(e.errors)
        })
      }
    })
  }
  return (
    <div >
      <h1>Developer Chat App</h1>
{/* ||||||||||||||||| Below this line is the login form for a new user ||||||||||||||||*/}
       <form className="box" onSubmit={handleSubmit}> 
        <h1 className="text-center">Log In</h1>
          <div className="input-container">
            <input 
            required
            type="text" 
            // name={username}
            name="username"
            // value={username}
            value={formData.username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleChange}
            />
            <label 
            // htmlFor="username"
            >User Name</label>		
          </div>

          <div className="input-container">		
            <input 
            required
              type="password" 
              name="password"
              // value={password}
              value={formData.password}
              // onChange={(e)=> setPassword(e.target.value)}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <p>{displayError}</p>
          <div className="btn-container">
            <button className="btn-29"  to="/home">Log In</button>
            <p className="or-section">-- or --</p>
            <Link className="btn-29" type="submit" to="/signup">Sign Up</Link>
          <p className="login-footer">Please Log In or Sign Up</p>
          </div>
      </form>	

    </div>
  );
}

export default Login