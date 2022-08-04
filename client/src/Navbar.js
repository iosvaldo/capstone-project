import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { HiOutlineHome } from "react-icons/hi";
import "./css/Navbar.css";
import logo from "./img/chat-icon-2.png";


//CSS ClassNames : nav-container : nav-list : nav-items : nav-items name-title : nav-button : pageSwitcherItem

function Navbar({ user, setUser }) {
  const navigate = useNavigate("/");
  function handleSignout() {
    fetch("/signout", {
      method: "delete"
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/signin");
      }
    });
  }
  return (
    <div className="nav-container">
      <ul className="nav-list">
        
        <img src={logo} style={{ width: "1%"}} alt="logo" />

        <li>
          <NavLink to="/home" className="nav-items">
            <HiOutlineHome></HiOutlineHome>
          </NavLink>
        </li>
        {user != null ? (
          <>
            <li className="nav-items name-title">{`Hi, ${user.name.toUpperCase()}`}</li>
            <li>
              <NavLink
                className="nav-button nav-items name-title"
                exact
                to="/signin"
                onClick={handleSignout}
              >
                {`Sign out, ${user.name.toUpperCase()}`}
              </NavLink>{" "}
              {" / "}
              <NavLink exact to="/profile" className="nav-items">
                Profile
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            {" "}
            <NavLink exact to="/signin" className="nav-items">
              Sign In
            </NavLink>
            {" / "}
            <NavLink exact to="/signup" className="nav-items">
              Sign Up
            </NavLink>
            {" / "}
            <NavLink exact to="/profile" className="nav-items">
              profile
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
