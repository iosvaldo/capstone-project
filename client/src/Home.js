import React from "react";
import { NavLink } from "react-router-dom";
import { VscDebugConsole } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// import "./App.css"
function Home() {
  return (
    <Container
      style={{
        marginTop: "5%",
        borderStyle: "solid",
        borderColor: "grey"
      }}
    >
      <p
        style={{
          fontFamily: "Ariel",
          fontSize: "50px"
        }}
      >
        What Chatroom are you interested in?
      </p>
      <br />
      <ul className="app-list">
        <li>
          {" "}
          <NavLink exact to="/rooms/1" className="app-items">
            <FaReact /> Front End
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink exact to="/rooms/2" className="app-items">
            <SiRubyonrails /> Back End
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink exact to="/rooms/3" className="app-items">
            <VscDebugConsole /> Debugging
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink exact to="/rooms/4" className="app-items">
            <IoIosPeople /> General
          </NavLink>{" "}
        </li>
      </ul>
    </Container>
  );
}

export default Home;
