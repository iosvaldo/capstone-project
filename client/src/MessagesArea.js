import React from "react";
import "./css/Chat.css";
import { FiSend } from "react-icons/fi";
import { Button } from "react-bootstrap";
import InputEmoji from "react-input-emoji";

function MessagesArea({ submitMessage, newMessage, onMessageInput }) {
  return (
    <div id="form-div">
      <form id="chat-form" className="message-form">
        <InputEmoji
          type="text"
          placeholder="Write a message... "
          value={newMessage}
          onChange={onMessageInput}
          cleanOnEnter
          onEnter={(e) => submitMessage(newMessage, e)}
        />

        <Button
          id="send-button"
          className="send-button"
          type="button"
          onClick={(e) => submitMessage(newMessage, e)}
        >
          Send<FiSend></FiSend>
        </Button>
      </form>
    </div>
  );
}

export default MessagesArea;
