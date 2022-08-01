import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { VscDebugConsole } from "react-icons/vsc";
// import { FaReact } from "react-icons/fa";
// import { SiRubyonrails } from "react-icons/si";
// import { IoIosPeople } from "react-icons/io";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdMeetingRoom } from "react-icons/md";
import { Accordion } from "@mantine/core";
import "./css/App.css";

//CSS Class Names on this page : home-title : chat-room-links

function Home() {
  const [newChatrooms, setNewChatrooms] = useState("");
  const [newRoomDescription, setNewRoomDescription] = useState("");
  const [allRooms, setAllRooms] = useState([]);

  //  console.log(allRooms)
  const handleSubmit = (e) => {
    console.log(newChatrooms);
    console.log(newRoomDescription);
    e.preventDefault();
    fetch(`/rooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        room_body: newRoomDescription,
        room_name: newChatrooms
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setAllRooms([...allRooms, data]);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetch(`/rooms`, {})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllRooms(data);
        //  setNewRoomDescription(data.chatroom);
      });
  }, []);

  //  chatroom POST request

  // const handleRoomSubmit = (e) => {
  //   // console.log(newChatrooms);
  //   // console.log(newRoomDescription);
  //   e.preventDefault();
  //   fetch(`/chatrooms`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       room_name: newChatrooms
  //     })
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("DATA", data);
  //       // setAllRooms([...allRooms, data]);
  //     });
  //   // .catch(console.error);
  // };

  useEffect(() => {
    // fetch(`/chatrooms`, {})
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // setAllRooms(data);
    //     //  setNewRoomDescription(data.chatroom);
    //   });
  }, []);

  const newUserRooms = allRooms.map((n) => (
    <Accordion.Item value={`${n.id}`} key={n.id}>
      <Accordion.Control>{n.room_name}</Accordion.Control>
      <Accordion.Panel>
        {n.room_body}{" "}
        <NavLink exact to={`/rooms/${n.id}`} className="home-room-links">
          {`${n.room_name}`}
          {n.newChatrooms}{" "}
        </NavLink>{" "}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      className="home-accordian"
      variant="contained"
      radius="md"
      chevronSize={30}
      defaultValue="customization"
    >
      <h1 className="home-title">
        What Chatroom are you interested in? <MdMeetingRoom></MdMeetingRoom>
      </h1>
      {/* <form onSubmit={handleSubmit}>
        <label>Add room name </label>
        <input
        onChange={(e) => setNewChatrooms(e.target.value)}
        type="text"
        value={newChatrooms}
        name="name"
        placeholder="Enter room name"
        required="required"
        />
        <label>Add room description </label>
        <input
        onChange={(e) => setNewRoomDescription(e.target.value)}
        value={newRoomDescription}
        type="text"
        name="name"
        placeholder="Enter room description"
        required="required"
        />
        <button onClick={handleSubmit}>Create a room</button>
        
      </form> */}
      {newUserRooms}
      {/* <Container className="form-container"> */}
      <form onSubmit={handleSubmit}>
        <div className="formField">
          <div className="form-icon">
            <label htmlFor="room-name">{/* <BsPersonLinesFill /> */}</label>
          </div>
          <input
            type="text"
            id="roomname"
            className="formFieldInput"
            placeholder="Enter room name"
            name="room_name"
            value={newChatrooms}
            onChange={(e) => setNewChatrooms(e.target.value)}
          />
        </div>

        <div className="formField">
          <div className="form-icon">
            <label htmlFor="description">{/* <MdPassword /> */}</label>
          </div>
          <input
            type="text"
            id="description"
            className="formFieldInput"
            placeholder="Enter room description"
            name="description"
            onChange={(e) => setNewRoomDescription(e.target.value)}
            value={newRoomDescription}
          />
        </div>
        <div id="buttons-div" className="formField">
          <button className="formFieldButton">Create New Room</button>{" "}
          {/* <Link exact to="/signup" className="formFieldLink">
            Create an account
          </Link> */}
        </div>
      </form>
      {/* </Container> */}
    </Accordion>
  );
}

export default Home;
