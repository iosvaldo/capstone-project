import React from "react"
import { Container, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Disclaimer() {
	const navigate = useNavigate()
	return (
		<Container style={{ color: "#000" }}>
			THIS WEBSITE DOES NOT PROVIDE 100% acuratacy, please check official documentations or versions of your tools before implementing anything permenetly.Thank you!
			<Row>
				<Col>
					<Button
						variant="danger"
						style={{ marginTop: "10px" }}
						onClick={() => navigate("/signup")}
					>
						back to signup
					</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default Disclaimer
