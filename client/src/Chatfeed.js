import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import EditMessage from "./EditMessage";

function Chatfeed({
  currentUser,
  room,
  allUsers,
  user,
  message,
  onUpdateMessage,
  onDeleteMessage
}) {
  const [showHelp, setShowHelp] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  function showEditAndDelete() {
    setShowHelp(!showHelp);
  }

  function handleUpdateMessage(updatedMessage) {
    setShowEdit(false);
    onUpdateMessage(updatedMessage);
  }
  const timestamp = new Date(message.created_at).toLocaleTimeString();
  const whichUser = () => {
    if (message.user_id === parseInt(currentUser.id)) {
      return "current-user-message";
    } else {
      return "other-user-message";
    }
  };
  return (
    <div id="chat-message" className={whichUser()}>
      {user !== undefined && (
        <span className="message-name" >{user.username}</span>
      )}
      <FaUserCircle className="default-user-icon" 
      >
        
      </FaUserCircle>
      <p className="message-text" >{message.message_body}</p>
      {timestamp !== "Invalid Date" ? (
        <span clasName="timestamp-display">{timestamp}</span>
      ) : (
        <i  clasName="timestamp-display">Edited</i>
      )}
      {whichUser() === "current-user-message" && (
        <HiDotsCircleHorizontal className="three-dots-icons"
          
          onClick={showEditAndDelete}
        ></HiDotsCircleHorizontal>
      )}
      {showHelp && whichUser() === "current-user-message" ? (
        <>
          <MdDeleteForever
            onClick={() => onDeleteMessage(message.id)}
            style={{ float: "left" }}
          ></MdDeleteForever>

          <FaRegEdit
            onClick={() => setShowEdit(!showEdit)}
            style={{ float: "left" }}
          ></FaRegEdit>
          {showEdit && (
            <EditMessage
              message={message}
              onUpdateMessage={handleUpdateMessage}
            ></EditMessage>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Chatfeed;
