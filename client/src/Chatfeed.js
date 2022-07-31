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
        <i style={{ float: "left", fontSize: "12px" }}>{user.username}</i>
      )}
      <FaUserCircle
        style={{ height: "auto", width: "30px", float: "right" }}
      ></FaUserCircle>
      <p style={{ color: "black" }}>{message.message_body}</p>
      {timestamp !== "Invalid Date" ? (
        <i style={{ fontSize: "12px", marginLeft: "10%" }}>{timestamp}</i>
      ) : (
        <i style={{ fontSize: "10px" }}>Edited</i>
      )}
      {whichUser() === "current-user-message" && (
        <HiDotsCircleHorizontal
          style={{ float: "left" }}
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
