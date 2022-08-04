import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdPassword } from "react-icons/md";
import { BsPersonFill, BsPersonLinesFill, BsCardImage } from "react-icons/bs";
import PageSwitcher from "./PageSwitcher";
import { useNavigate } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
import logo from "./img/chat-icon-2.png";


function Signup({ onSignup }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const signupObj = {
    name: "",
    username: "",
    password: "",
    passwordConfirmation: "",
    image: "",
    hasAgreed: false
  };
  const [signupForm, setSignupForm] = useState(signupObj);

  function handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let image = target.image;
    let name = target.name;

    setSignupForm({ ...signupForm, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: signupForm.name,
        username: signupForm.username,
        password: signupForm.password,
        password_confirmation: signupForm.passwordConfirmation,
        profile_img: signupForm.image,
        has_agreed: signupForm.hasAgreed
      })
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onSignup(user);
          navigate("/signin");
          setSignupForm(signupObj);
        });
      } else {
        r.json().then((err) => {
          console.log(err);
          setErrors(err.errors);
        });
      }
    });
  }

  console.log(signupForm.image)
  return (
    <Container
      className="form-container"
      style={{
        // overflow: "auto",
        height: "60%",
        width: "40%",
        marginTop: "5%",
        border: "1px solid black"
        // borderStyle: "solid",
        // borderColor: "grey"
      }}
    >
      <PageSwitcher />
      <div className="formCenter">
        {errors.map((err) => (
          <Alert variant="danger">{err}</Alert>
        ))}
        <img src={logo} style={{ width: "10%", margin: "auto" }} alt="logo" />

        <form onSubmit={(e) => handleSubmit(e)} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              <BsPersonFill />
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter first name"
              name="name"
              value={signupForm.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="username">
              <BsPersonLinesFill />
            </label>
            <input
              type="text"
              id="username"
              className="formFieldInput"
              placeholder="Enter username"
              name="username"
              required
              value={signupForm.username}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              <MdPassword />
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter password"
              required
              name="password"
              value={signupForm.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              <MdPassword />
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              className="formFieldInput"
              placeholder="Confirm password"
              name="passwordConfirmation"
              required
              value={signupForm.passwordConfirmation}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="image">
              <BsCardImage /> Add Profile Image
            </label>
            <input
              type="text"
              id="enter-image"
              placeholder="image URL"
              required
              name="image"
              value={signupForm.image}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                required
                checked={signupForm.hasAgreed}
                onChange={(e) => handleChange(e)}
              />{" "}
              I agree all statements in{" "}
              <Link exact to="/disclaimer" className="formFieldTermsLink">
                terms of service
              </Link>
            </label>
          </div>

          <div id="buttons-div" className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link exact to="/signin" className="formFieldLink" id="member-text">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Signup;
