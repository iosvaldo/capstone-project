import React from "react";
import "./css/Chat.css";
import { FiSend } from "react-icons/fi";
import { Button } from "react-bootstrap";
import InputEmoji from "react-input-emoji";

function MessagesArea({ submitMessage, newMessage, onMessageInput }) {
  //  const [text, setText] = useState("");

  //  function handleOnEnter(text) {
  //    console.log("enter", text);
  //  }

  return (
    <div id="form-div">
      <form id="chat-form" className="message-form" onSubmit={submitMessage}>
        <InputEmoji
          style={{ overflowY: " hidden", width: "80%", height: "60px" }}
          type="text"
          className="message-input"
          placeholder="Post new message... "
          value={newMessage}
          onChange={onMessageInput}
         
          cleanOnEnter
          onEnter={submitMessage}
          
        />

        <Button id="send-button" className="send-button" type="submit">
          Send<FiSend></FiSend>
        </Button>
      </form>
    </div>
  );
}

export default MessagesArea;
