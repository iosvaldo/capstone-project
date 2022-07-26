import React, { useState, useEffect } from "react"
import { GrSend } from "react-icons/gr"
import { Button } from "react-bootstrap"
import "./css/Chat.css"

function MessageArea({currentUser,room }) {

  const [ formData, setFormData ] = useState({
    room_id: 1,
    user_id: currentUser.id,
    body: ""
  })
    console.log(room);

  const [message,setMessage] = useState('');
  function submitMessage(e){
    e.preventDefault();
  
    console.log(room);
   
   
let newObject = {
  room_id: 1,
  user_id: currentUser.data.id,
  body:message
}


    //  setFormData([...formData,{
    //       room_id: formData.room_id,
    //       user_id: currentUser.id,
    //       body:message}])
           console.log(newObject)
    
    // create a post request
    fetch(`/messages`,{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(newObject)
    })
    .then(r => r.json())
    .then(newMessage => {
        console.log(message)
        setMessage([...message, newMessage])
        setFormData({
          room_id: formData.room_id,
          user_id: currentUser.id,
          body:""})
    })
  }
  useEffect(()=> {
    fetch(`/rooms/${window.location.href.match(/\d+$/)[0]}`,{
      credentials: 'include'
    })
    .then(r => r.json())
    .then(data =>{
      console.log(data)
    })
  },[])

  return (
    <form id="chat-form" className="message-form" onSubmit={(e)=>submitMessage(e)}>
      <textarea
        type="text"
        className="message-input"
        placeholder="Post new message... "
        value={message}
        onChange={(e)=> setMessage(e.target.value)}></textarea>
      <Button className="send-button" type="submit">
    Send<GrSend></GrSend>
   </Button>
  </form>
 )
}

export default MessageArea