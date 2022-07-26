import React, { useEffect } from "react"

function RoomWebSocket(props) {
	useEffect(() => {
		// props.roomData	
		props.cableApp.room = props.cableApp.cable.subscriptions.create(
			{
				channel: "ChatroomsChannel",
				room: window.location.href.match(/\d+$/)[0],
			},
			{
				received: (updatedRoom) => {
					// props.updateApp(updatedRoom)
					props.actionUpdate(updatedRoom)
					console.log(updatedRoom);
				},
			}
		)
	}, [])

	return <div></div>
}

export default RoomWebSocket
