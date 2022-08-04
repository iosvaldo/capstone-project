import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import gif from './img/enter_room.gif';

function Room({ currentUser }) {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  useEffect(() => {
    fetch(`/rooms/${id}`)
      .then((r) => r.json())
      .then((res) => setRoom(res));
  }, [id]);

  return (
    <Container className="enter-chatroom-container">
      <img className="enter-gif" src={gif} alt="gif"/>
      {room && (
        <p className="chatroom-items">
          {" "}
          {room.room_body}
        </p>
      )}
      <NavLink exact to={`/chatrooms/${id}`} className="chatroom-items">
        {currentUser ? (
          "Enter the chatroom"
        ) : (
          <Link className="chatroom-items" to="/signin">
            Please Sign in to enter Chatroom
          </Link>
        )}
      </NavLink>
    </Container>
  );
}

export default Room;
