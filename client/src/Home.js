import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import MessagesArea from './MessageArea';
import "./App.css";



function Home({currentUser}) {


  return (
    <div>
      <Container currentUser={currentUser}
       style={{ marginTop: "5%", borderStyle: "solid", borderColor: "grey" }}>
       <p style={{
        fontFamily: "Ariel",
         fontSize: "50px",
          }}>
          What Chat room are you interested in?
          </p>
          <br />
        <ul className="app-list">
        <li>
         {" "}
          <NavLink exact to="/rooms/1" className="app-items" messages={MessagesArea}>
          <FaReact /> Front end
          </NavLink>{" "}
         </li>
         <li>
          {" "}
		       <NavLink exact to="/rooms/2" className="app-items">
            <SiRubyonrails /> Back end
           </NavLink>
        </li>
        <li>
          {" "}
          <NavLink exact to="/rooms/3" className="app-items">
            <IoIosPeople /> General
          </NavLink>
        </li>
      </ul>
    </Container>
    </div>
  )
}

export default Home