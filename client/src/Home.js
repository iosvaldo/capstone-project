import React from "react";
import { NavLink } from "react-router-dom";
import { VscDebugConsole } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRestroom } from "react-icons/fa";
import { Accordion } from '@mantine/core';
// import "./css/Home.css;"
import "./App.css";


//CSS Class Names on this page : home-title : chat-room-links 

function Home() {
  return (
    <Accordion
      variant="contained"
      radius="md"
      chevronSize={30}
      defaultValue="customization"
    >
      <h1 className="home-title">
        What Chatroom are you interested in? <FaRestroom></FaRestroom>
      </h1>
      <Accordion.Item value="customization">
        <Accordion.Control>Front-End</Accordion.Control>
        <Accordion.Panel>
          Colors, fonts, shadows and many other parts are customizable to fit
          your design needs{" "}
          <NavLink exact to="/rooms/1" className="home-room-links">
            <FaReact /> Front End{" "}
          </NavLink>{" "}
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Back End</Accordion.Control>
        <Accordion.Panel>
          Configure components appearance and behavior with vast amount of
          settings or overwrite any part of component styles{" "}
          <NavLink exact to="/rooms/2" className="home-room-links">
            <SiRubyonrails /> Back End{" "}
          </NavLink>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>General</Accordion.Control>
        <Accordion.Panel>
          With new :focus-visible pseudo-class focus ring appears only when user
          navigates with keyboard{" "}
          <NavLink exact to="/rooms/4" className="home-room-links">
            <IoIosPeople /> General{" "}
          </NavLink>{" "}
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="final">
        <Accordion.Control>Debugging</Accordion.Control>
        <Accordion.Panel>
          With new :focus-visible pseudo-class focus ring appears only when user
          navigates with keyboard{" "}
          <NavLink exact to="/rooms/3" className="home-room-links">
            <VscDebugConsole /> Debugging{" "}
          </NavLink>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export default Home;
