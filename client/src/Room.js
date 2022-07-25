import React, { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"

function Room({ currentUser }) {
	// const { id } = useParams()
	const [room, setRoom] = useState({});
	useEffect(() => {
		fetch(`/rooms/${window.location.href.match(/\d+$/)[0]}`)
			.then((r) => r.json())
			.then((res) => setRoom(res))
	}, [])

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
      <nav>
			<NavLink exact to={`/rooms/${room.id}`} className="app-items">
				{currentUser ? (
					"Enter the chatroom"
				) : (
					<Link className="app-items" to="/chatroom">
						Please Sign in to enter Chatroom
					</Link>
				)}
			</NavLink>
      </nav>
		</Container>
	)
}

export default Room

