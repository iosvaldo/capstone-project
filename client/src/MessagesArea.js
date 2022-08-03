import React from "react";
import "./css/Chat.css";
import { FiSend } from "react-icons/fi";
import { Button } from "react-bootstrap";
import InputEmoji from "react-input-emoji";
import instant from "./instant_message.mp3";


function MessagesArea({ submitMessage, newMessage, onMessageInput }) {
   
  const audio = new Audio({instant});
  return (
    <div id="form-div">
      {/* <div id="chat-form" className="message-form"> */}
      <InputEmoji
        type="text"
        placeholder="Write a message... "
        value={newMessage}
        onChange={onMessageInput}
        style={{ width: "50px", wordWrap: "break-word" }}
        cleanOnEnter
        onEnter={(e) => submitMessage(newMessage, e)}
      />

      <Button
        id="send-button"
        className="send-button"
        type="button"
        onClick={(e) => {
          submitMessage(newMessage, e);
          audio.play();
        }}
      >
        Send<FiSend></FiSend>
      </Button>
    
      {/* </div> */}
    </div>
  );
}

export default MessagesArea;
