import React from "react"
import "./css/Footer.css"
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FcDisclaimer } from "react-icons/fc";

// CSS ClassNames : footer-container : footer-contact 

function Footer() {
	return (
		<div className="footer-container">
			<a className="footer-contact" href="mailto:iosvaldo.app@gmail.com">Contact Developer</a>
			{/* <div className="social-icons"> */}
				<BsGithub></BsGithub>
				<AiFillLinkedin></AiFillLinkedin>
				<FcDisclaimer></FcDisclaimer>
			{/* </div> */}
		</div>
	)
}

export default Footer
