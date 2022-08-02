import React from 'react'
import { useNavigate } from "react-router";
import './css/Userprofile.css';
import { Container } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import PageSwitcher from "./PageSwitcher";

// import { Button } from 'react-bootstrap';

function UserProfile({currentUser}) {

    const handleSubmit = (e) => {
     
      e.preventDefault();
      fetch(`/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "John",
          profile_img: "./img/hacker3.png",
          bio: "I love cookies",
        })
      })
        .then((res) => console.log(res))
        // .then((data) => {
        //   console.log
        //   // setAllRooms([...allRooms, data]);
        // })
        .catch(console.error);
    };




  const navigate = useNavigate();
  console.log(currentUser)
  return (
    <Container className="form-container">
      <PageSwitcher />
      <div className="formCenter">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="formField">
            <div className="form-icon">
              <label htmlFor="username">
                <div style={{margin:"auto"}}>
                  <img
                    src={currentUser.profile_img}
                    style={{
                      width: "50%",
                      borderRadius: "100px",
                      boxShadow: "5px 5px 10px 4px rgba(0,0,0,0.75)"
                    }}
                    alt="userprofile"
                  />
                </div>
                <p style={{ display: "inline" }}>NAME:</p>
                <h4 class="m-t-0 m-b-0">
                  <strong>{currentUser.name}</strong>
                </h4>
                <p style={{ display: "inline" }}>BIO:</p>
                <p class="job_post">{currentUser.bio}</p>
              </label>
            </div>
          </div>
          <div className="profile-btns">
            <button
              class=" formFieldButton btn btn-primary btn-round"
              onClick={handleSubmit}
            >
              edit profile
            </button>
            <button
              class="formFieldButton btn btn-primary btn-round"
              variant="danger"
              onClick={() => navigate("/")}
            >
              back to Chatrooms
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default UserProfile



