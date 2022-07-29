import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { HiOutlineHome } from "react-icons/hi";
import "./css/Navbar.css";

function Navbar({ user, setUser }) {
  const navigate = useNavigate("/");
  function handleSignout() {
    fetch("/signout", {
      method: "delete"
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className="nav-items">
            <HiOutlineHome></HiOutlineHome>
          </NavLink>
        </li>
        {user != null ? (
          <>
            <li className="nav-items name-title">{`Hi, ${user.name.toUpperCase()}`}</li>
            <li>
              <button className="nav-button" onClick={handleSignout}>
                Sign out
              </button>
            </li>
          </>
        ) : (
          <li>
            {" "}
            <NavLink exact to="/signup" className="nav-items">
              Sign up/Sign in
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
