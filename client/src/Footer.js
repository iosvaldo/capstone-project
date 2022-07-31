import React from "react";
import "./css/Footer.css";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FcDisclaimer } from "react-icons/fc";
import { HiOutlineMailOpen } from "react-icons/hi";
import { NavLink } from "react-bootstrap";

// CSS ClassNames : footer-container : footer-contact

function Footer() {
  return (
    <div className="footer-container">
      <NavLink className="footer-contact" href="mailto:iosvaldo.app@gmail.com">
        <HiOutlineMailOpen></HiOutlineMailOpen>
      </NavLink>
      <BsGithub className="social-icons git"></BsGithub>
      <AiFillLinkedin className="social-icons linked"></AiFillLinkedin>
      <NavLink href="/disclaimer">
        <FcDisclaimer className="social-icons claim"></FcDisclaimer>
      </NavLink>
    </div>
  );
}

export default Footer;
