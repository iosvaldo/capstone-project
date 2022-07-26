import React, { useState, useEffect } from 'react';
import './App.css';
// import Room from './Room';
import RoomShow from "./RoomShow"
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import {Routes , Route} from 'react-router-dom'
import Signup from './Signup';
import MessageArea from './MessageArea';
import Login from './Login';
import Home from './Home';
import "bootstrap/dist/css/bootstrap.min.css";

function App({cableApp}) {
  // const [currentUser, setCurrentUser] = useState(null)
	const [allUsers, setAllUsers] = useState([])
	const [currentRoom, setCurrentRoom] = useState({
		room: {},
		users: [],
		messages: [],
	})


useEffect(() => {
		fetch("/me").then((response) => {
			if (response.ok) {
				response.json().then((user) => setCurrentUser(user))
			}
		})

		fetch("/users")
			.then((r) => r.json())
			.then((users) => {
				setAllUsers(users)
			})
	}, [])

	function handleSignups(newUser) {
		setAllUsers({ ...allUsers, newUser })
	}

	function updateAppStateRoom(newRoom) {
    console.log(newRoom)
		setCurrentRoom({
			...currentRoom,
			room: newRoom,
			users: newRoom.users,
			messages: newRoom.messages,
		})
		setMessages(newRoom.messages)
	}
// console.log(currentRoom)
	function handleUpdateCurrentUser(user) {
		setCurrentUser(user)
	}

	function handleCurrentRoom(result) {
		return {
			room: result.data.attributes,
			users: result.data.attributes.users.data,
			messages: result.data.attributes.messages,
		}
	}

	function getRoomData(id) {
		fetch(`/chatrooms/${id}`)
			.then((res) => res.json())
			.then((result) => {
				setCurrentRoom(() => handleCurrentRoom(result))
			})
	}


	const [messages, setMessages] = useState(null)

  
  const [currentUser,setCurrentUser] = useState({})
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
    <Route path='/signup'element={<Signup setCurrentUser={setCurrentUser}/>}/>
    <Route path='/login'element={<Login setCurrentUser={setCurrentUser}/>}/>
    {/* <Route path="/rooms/:id" element={<Room currentUser={currentUser} />}/> */}
    <Route path='/rooms/:id' element={<MessageArea currentUser={currentUser} currentRoom={currentRoom} />}/>
    <Route path="/home" element={<Home currentUser={currentUser} />}/>
    <Route path={currentUser   ? "/rooms/:id" : "/signup" }element={
      <RoomShow 
									users={allUsers}
									cableApp={cableApp}
									updateApp={updateAppStateRoom}
									getRoomData={getRoomData}
									roomData={currentRoom}
									currentUser={currentUser}
									messages={messages}
									handleMessageUpdate={setMessages}
								/>
							}
              /> 
				
			
    </Routes>
    
  )
}

export default App;
