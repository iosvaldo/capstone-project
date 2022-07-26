import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Container } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"

function Room({ currentUser }) {
	const { id } = useParams()
	const [room, setRoom] = useState(null)
	useEffect(() => {
		fetch(`/rooms/${id}`)
			.then((r) => r.json())
			.then((res) => setRoom(res))
	}, [id])

	return (
		<Container
			style={{ marginTop: "5%", borderStyle: "solid", borderColor: "grey" }}
		>
			{room && (
				<p className="app-items" style={{ color: "#5B4C81" }}>
					{" "}
					{room.room_body}
				</p>
			)}
			<NavLink exact to={`/chatrooms/${id}`} className="app-items">
				{currentUser ? (
					"Enter the chatroom"
				) : (
					<Link className="app-items" to="/signin">
						Please Sign in to enter Chatroom
					</Link>
				)}
			</NavLink>
		</Container>
	)
}

export default Room
