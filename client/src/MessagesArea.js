import React from "react";
import "./css/Chat.css";
import { FiSend } from "react-icons/fi";
import { Button } from "react-bootstrap";
// import Picker from 'emoji-picker-react';

function MessagesArea({ submitMessage, newMessage, onMessageInput }) {
  // const [chosenEmoji, setChosenEmoji] = useState(null);

  // const onEmojiClick = (event, emojiObject) => {
  //   setChosenEmoji(emojiObject);
  // };

  return (
    <div id="form-div">
      <form id="chat-form" className="message-form" onSubmit={submitMessage}>
        <input
          style={{ overflowY: " hidden", width: "80%", height: "60px"}}
          type="text"
          // className="message-input"
          placeholder="Post new message... "
          value={newMessage}
          onChange={onMessageInput}
        ></input>

        <Button id="send-button" className="send-button" type="submit">
          Send<FiSend></FiSend>
        </Button>
      </form>
    </div>

    // <div>
    //   {chosenEmoji ? (
    //     <span>You chose: {chosenEmoji.emoji}</span>
    //   ) : (
    //     <span>No emoji Chosen</span>
    //   )}
    //   <Picker onEmojiClick={onEmojiClick} />
    // </div>
  );
}

export default MessagesArea;
