import React, { useState, useEffect, useRef } from "react";
import Chatfeed from "./Chatfeed";
import MessagesArea from "./MessagesArea";
import RoomWebSocket from "./RoomWebSocket";
import Search from "./Search";
import { Image, List } from "semantic-ui-react";
import userImage from "./img/hacker.png";

import "./css/Chat.css";
import { GiBottomRight3DArrow } from "react-icons/gi";

function RoomShow({ cableApp, updateApp, handleMessageUpdate, currentUser }) {
  const [newMessage, setNewMessage] = useState("");
  const [getData, setGetData] = useState({});
  const [roomData, getRoomData] = useState({});
  const [users, setUsers] = useState([]);
  const [messages, setmessages] = useState([]);
  const [search, setSearch] = useState("");
  const bottomRef = useRef(null);
  const chatroomId = window.location.href.match(/\d+$/)[0];
  console.log(messages);

  useEffect(() => {
    fetch(`/chatrooms/${chatroomId}`)
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        setGetData(res);
        // handleMessageUpdate(res.messages)
        getRoomData(res);
        setUsers(res.users);
        setmessages(res.messages);
      });
  }, []);

  function actionUpdate(res) {
    setGetData(res);
    getRoomData(res);
    setUsers(res.users);
    setmessages(res.messages);
  }
  function displayUsers(data) {
    return data
      .map((x) => x)
      .filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      )
      .map((user) => {
        return (
          <div className="user-board">
            <List
              selection
              verticalAlign="middle"
              style={{
                overflowY: "scroll",
                scrollBehavior: "smooth",
                display: "inline"
              }}
            >
              <List.Item>
                <Image className="avatar-img" alt="avatar" src={userImage} />
                <List.Content
                  style={{
                    display: "inline",
                    overflowY: "scroll",
                    scrollBehavior: "smooth"
                   
                  }}
                >
                  <List.Header
                    style={{
                      display: "inline",
                      listStyle: "none",
                      overflowY: "scroll",
                      float: "left"
                    }}
                  >
                    @{user.username}
                  </List.Header>
                  <List.Description>
                    <p key={user.id} />
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </div>
        );
      });
  }

  function handleMessageInput(event) {
    setNewMessage(event.target.value);
  }
  const message = {
    message_body: newMessage,
    user_id: currentUser.id,
    chatroom_id: chatroomId
  };
  function submitMessage(e) {
    // debugger;
    e.preventDefault();
    console.log("helloe")
    setNewMessage("");
    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(message)
    })
      .then((resp) => resp.json())
      .then(() => {
        let messageDiv = document.getElementById("messages");
        messageDiv.scrollTop = messageDiv.scrollHeight;
      });
  }
  function whichUser(message) {
    const user = roomData.users.find((x) => parseInt(x.id) === message.user_id);
    return user;
  }

  function displayMessages(messages) {
    return messages.map((msg) => {
      const user = whichUser(msg);
      // console.log(user)
      return msg.message_body !== null ? (
        <Chatfeed
          key={msg.id}
          room={roomData}
          user={user}
          onDeleteMessage={handleDeleteClick}
          onUpdateMessage={handleUpdateMessage}
          currentUser={currentUser}
          allUsers={users}
          message={msg}
        />
      ) : (
        <div></div>
      );
    });
  }
  function handleUpdateMessage(updatedMessageObj) {
    const updatedMessages = messages.map((message) => {
      if (message.id === updatedMessageObj.id) {
        return updatedMessageObj;
      } else {
        return message;
      }
    });
    handleMessageUpdate(updatedMessages);
  }

  function handleDeleteClick(id) {
    fetch(`/messages/${id}`, {
      method: "DELETE"
    });

    const updatedMessages = messages.filter((message) => message.id !== id);
    handleMessageUpdate(updatedMessages);

  }

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <div className="chat-container">
        <hr />
        <div className="chat-board-title">
          <hr />
          <h4>Chatroom Members</h4>
          <Search search={search} setSearch={setSearch}></Search>
        </div>
        <div className="users">
          {/* <p style={{ float: "left" }}>#{roomData.chatroom.room_name}</p> */}

          {getData !== null ? displayUsers(users) : null}
        </div>
        <div id="messages" className="message-feed">
          <div>
            {messages !== null && messages.length > 0 ? (
              displayMessages(messages)
            ) : (
              <h3 style={{ color: "blue", marginTop: "50px" }}>
                This room has no message yet
              </h3>
            )}
            <div ref={bottomRef} />
          </div>
        </div>

        <RoomWebSocket
          cableApp={cableApp}
          updateApp={updateApp}
          getRoomData={getRoomData}
          roomData={roomData}
          actionUpdate={actionUpdate}
        />
      </div>
      <div>
        <MessagesArea
          submitMessage={submitMessage}
          newMessage={newMessage}
          onMessageInput={handleMessageInput}
        />
      </div>
    </div>
  );
}

export default RoomShow;
