import React, { useState } from "react"
import { MdDeleteForever } from "react-icons/md"
import { GiHelp } from "react-icons/gi"
import { FaRegEdit } from "react-icons/fa"
import EditMessage from "./EditMessage"



function Chatfeed({
	currentUser,
	room,
	allUsers,
	user,
	message,
	onUpdateMessage,
	onDeleteMessage,
}) {
	const [showHelp, setShowHelp] = useState(false)
	const [showEdit, setShowEdit] = useState(false)

	function showEditAndDelete() {
		setShowHelp(!showHelp)
	}

	function handleUpdateMessage(updatedMessage) {
		setShowEdit(false)
		onUpdateMessage(updatedMessage)
	}
	const timestamp = new Date(message.created_at).toLocaleTimeString()
	const whichUser = () => {
		if (message.user_id === parseInt(currentUser.id)) {
			return "current-user-message"
		} else {
			return "other-user-message"
		}
	}
	return (
		<div id="chat-message" class="imessage" className={whichUser()}>
			{user !== undefined && (
				<i style={{ float: "left", fontSize: "8px" }}>{user.username}</i>
			)}
			<img
				style={{ height: "auto", width: "30px", float: "right" }}
				src="https://yorktonrentals.com/wp-content/uploads/2017/06/usericon.png"
				alt=""
			/>
			<p style={{ color: "black", height: "auto" }}>{message.message_body}</p>
			{timestamp !== "Invalid Date" ? (
				<i style={{ fontSize: "10px" }}>{timestamp}</i>
			) : (
				<i style={{ fontSize: "10px" }}>Edited</i>
			)}
			{whichUser() === "current-user-message" && (
				<GiHelp style={{ float: "left" }} onClick={showEditAndDelete}></GiHelp>
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
	)
}

export default Chatfeed
