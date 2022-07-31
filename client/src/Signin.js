import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Signin.css";
import { MdPassword } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import PageSwitcher from "./PageSwitcher";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
// import { Loader } from "@mantine/core";

// CSS ClassNames : load-spinner : formCenter :

function Signin({ onSignin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/signin", {
      method: "Post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onSignin(user);
          setUsername("");
          setPassword("");
          navigate("/");
        });
      } else {
        r.json().then((err) => {
          console.log(err);
          console.log(err.errors);
          setErrors(err.errors);
        });
      }
    });
  }
  //<Loader size="xl" />
  return (
    <>
      {isLoading ? (
        <h2 className="load-spinner">
          <img
            src="http://i.giphy.com/13Xkz5sLdjGiQw.gif"
            alt="loader"
          />
          Loading...
        </h2>
      ) : null}
      <Container className="form-container">
        <PageSwitcher />
        <div className="formCenter">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="formField">
              <div className="form-icon">
                <label htmlFor="username">
                  <BsPersonLinesFill />
                </label>
              </div>
              <input
                type="text"
                id="username"
                className="formFieldInput"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="formField">
              <div className="form-icon">
                <label htmlFor="password">
                  <MdPassword />
                </label>
              </div>
              {errors.map((err) => (
                <div
                  variant="danger"
                  style={{
                    width: "fit-content",
                    textAlign: "center",
                    alignItems: "center",
                    border: "none",
                    borderBlock: "none"
                  }}
                >
                  {err}
                </div>
              ))}
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div id="buttons-div" className="formField">
              <button className="formFieldButton">Sign In</button>{" "}
              <Link exact to="/signup" className="formFieldLink">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Signin;
