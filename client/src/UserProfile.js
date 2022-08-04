import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./css/Userprofile.css";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import PageSwitcher from "./PageSwitcher";
// import { MdDeleteForever } from "react-icons/md";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";

// import { Button } from 'react-bootstrap';

function UserProfile({ currentUser, setCurrentUser }) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [userBio, setUserBio] = useState(" ");
  // const [showEditButton, setShowEditButton] = useState(false);
  // console.log(userBio);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      bio: userBio
    };
    fetch(`/profile/${currentUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((r) => r.json())
      .then((data) => {
        setCurrentUser(data);
        handleEditBioButton();
        setUserBio('');
       

        // onUpdateBio({...data, id: userB.id });
      });
  };

  useEffect(() => {});

  const navigate = useNavigate();
  // console.log(currentUser)

  const handleEditBioButton = () => {
    setOpenDropDown(() => !openDropDown);
    // setShowEditButton(false);
  };

 
  return (
    <Container className="form-container">
      <PageSwitcher />
      <div className="formCenter">
        <div className="formField">
          <div className="form-icon">
            <label htmlFor="username">
              <div style={{ margin: "auto" }}>
                <img
                  src={currentUser?.profile_img}
                  style={{
                    width: "50%",
                    borderRadius: "50%",
                    boxShadow: "5px 5px 10px 4px rgba(0,0,0,0.75)"
                  }}
                  alt="userprofile"
                />
              </div>
              <p style={{ display: "inline" }}>NAME:</p>
              <h4 class="m-t-0 m-b-0">
                <strong>{currentUser?.name}</strong>
              </h4>
              <p style={{ display: "inline" }}>BIO:</p>
              <HiDotsCircleHorizontal onClick={handleEditBioButton} />
              click to Edit
              <p class="job_post">{currentUser?.bio}</p>
            </label>
          </div>
        </div>
        <div className="profile-btns">
          {openDropDown && (
            <>
              <form>
                <input
                  type="text"
                  name="body"
                  autoComplete="off"
                  value={userBio}
                  required="required"
                  placeholder="edit bio"
                  onChange={(e) => setUserBio(e.target.value)}
                />
                <button
                  type="submit"
                  class=" formFieldButton btn btn-primary btn-round"
                  onClick={handleSubmit}
                >
                  set changes
                </button>
              </form>
            </>
          )}
          <button
            class="btn btn-primary btn-round"
            onClick={() => navigate("/home")}
          >
            back to Chatrooms
          </button>
        </div>
      </div>
    </Container>
  );
}

export default UserProfile;
