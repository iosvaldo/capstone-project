import React from 'react'



// Logout funtion will remove a user information from state
function Navigation({setCurrentUser, currentUser,handleLogout}) {

  // const [navbarOpen, setNavbarOpen] = useState(false)


  return (
    <nav className='login-form-nav'>
      <div >
         <h1>Developer Chat App <button  className="todo-button logout" onClick={handleLogout}> 
         <span id="circle"></span>Log Out</button>
         </h1>
          <h1>Welcome! {currentUser.username}</h1>
      </div> 
    </nav> 
    ); 
  } 
  
export default Navigation