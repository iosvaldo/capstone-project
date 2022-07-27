import React, { useState, useEffect } from "react"
import Chatfeed from "./Chatfeed"
import MessagesArea from "./MessagesArea"
import RoomWebSocket from "./RoomWebSocket"
import Search from "./Search"

import "./css/Chat.css"

function RoomShow({
cableApp,
updateApp,
handleMessageUpdate,
currentUser,
}) {
	const [newMessage, setNewMessage] = useState("")
	const [getData, setGetData] = useState({})
	const [roomData, getRoomData] = useState({})
	const [users, setUsers] = useState([])
	const [messages, setmessages] = useState([])
	const [search, setSearch] = useState("")
	const chatroomId = window.location.href.match(/\d+$/)[0]
	console.log(messages)
	useEffect(() => {
		fetch(`/chatrooms/${chatroomId}`)
			.then((resp) => resp.json())
			.then((res) => {
				console.log(res)
				setGetData(res)
				// handleMessageUpdate(res.messages)
				getRoomData(res)
				setUsers(res.users)
				setmessages(res.messages)
			})
	}, [])
	function actionUpdate(res){
				setGetData(res)
				getRoomData(res)
				setUsers(res.users)
				setmessages(res.messages)
	}
	function displayUsers(data) {
		return data.map((x) => x).filter((user) =>
				user.username.toLowerCase().includes(search.toLowerCase())
			).map((user) => {
				return (
					<div
						style={{ overflowY: "scroll", scrollBehavior: "smooth" }}
						key={user.id}
					>
						<img
							style={{ height: "auto", width: "30px", float: "left" }}
							src=""
							alt="avatar"
						/>
						<h6
							style={{
								color: "white",
								listStyle: "none",
								overflowY: "scroll",
								float: "left",
							}}
						>
							@{user.username}
						</h6>
					</div>
				)
			})
	}

	function handleMessageInput(event) {
		setNewMessage(event.target.value)
	}
	const message = {
		message_body: newMessage,
		user_id: currentUser.id,
		chatroom_id: chatroomId,
	}
	function submitMessage(e) {
		// debugger;
		e.preventDefault()
		setNewMessage("")
		fetch("/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(message),
		})
			.then((resp) => resp.json())
			.then(() => {
				let messageDiv = document.getElementById("messages")
				messageDiv.scrollTop = messageDiv.scrollHeight
			})
	}
	function whichUser(message) {
		const user = roomData.users.find((x) => parseInt(x.id) === message.user_id)
		return user
	}

	function displayMessages(messages) {
		return messages.map((msg) => {
			const user = whichUser(msg)
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
			)
		})
	}
	function handleUpdateMessage(updatedMessageObj) {
		const updatedMessages = messages.map((message) => {
			if (message.id === updatedMessageObj.id) {
				return updatedMessageObj
			} else {
				return message
			}
		})
		handleMessageUpdate(updatedMessages)
	}

	function handleDeleteClick(id) {
		fetch(`/messages/${id}`, {
			method: "DELETE",
		})

		const updatedMessages = messages.filter((message) => message.id !== id)
		handleMessageUpdate(updatedMessages)
	}

	return (
		<div className="chat-container">
			<div className="users">
				{/* <p style={{ float: "left" }}>#{roomData.chatroom.room_name}</p> */}
				<h4 style={{ float: "left" }}>Chatroom Members</h4>
				<Search search={search} setSearch={setSearch}></Search>
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
				</div>
			
				<MessagesArea
					submitMessage={submitMessage}
					newMessage={newMessage}
					onMessageInput={handleMessageInput}
				/>
			</div>
			<RoomWebSocket
				cableApp={cableApp}
				updateApp={updateApp}
				getRoomData={getRoomData}
				roomData={roomData}
				actionUpdate={actionUpdate}
			/>
		</div>
	)
}

export default RoomShow
