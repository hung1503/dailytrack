import React, { useState } from "react";
import "./profile.css";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ClassIcon from "@mui/icons-material/Class";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTeacher } from "../../reducer/teacherReducer";

export default function Profile({ user }) {
  const dispatch = useDispatch();
  const teacher = useSelector((state) =>
    state.teachers.find((u) => u.username === user.username)
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [ava, setAva] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTeacher = {
      firstName,
      lastName,
      email,
      address,
      phone,
      ava,
    };
    dispatch(updateTeacher(teacher.id, updatedTeacher));
    console.log(updatedTeacher);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setAva("");
  };

  if (!teacher) {
    return <div>Loading...</div>;
  }
  return (
    <div className="profile">
      <div className="profileTitleContainer">
        <h1 className="profileTitle">Teacher's profile</h1>
        <Link to="/newprofile">
          <button className="profileAddButton">Create</button>
        </Link>
      </div>
      <div className="profileContainer">
        <div className="profileShow">
          <div className="profileShowTop">
            <img src="" alt="" className="profileShowImg" />
            <div className="profileShowTopTitle">
              <span className="profileShowName">
                {teacher.firstName} {teacher.lastName}
              </span>
              <span className="profileShowAge">Age: {teacher.age}</span>
            </div>
          </div>
          <div className="profileShowBottom">
            <span className="profileShowTitle">Info</span>
            <div className="profileShowInfo">
              <EmailIcon className="profileShowIcon" />
              <span className="profileShowInfoTitle">{teacher.email}</span>
            </div>
            <div className="profileShowInfo">
              <AddLocationAltIcon className="profileShowIcon" />
              <span className="profileShowInfoTitle">{teacher.address}</span>
            </div>
            <div className="profileShowInfo">
              <PhoneIcon className="profileShowIcon" />
              <span className="profileShowInfoTitle">
                {teacher.phonenumber}
              </span>
            </div>
            <div className="profileShowInfo">
              <ClassIcon className="profileShowIcon" />
              <span className="profileShowInfoTitle">
                Class: {teacher.class}
              </span>
            </div>
          </div>
        </div>
        <div className="profileUpdate">
          <span className="profileUpdateTitle">Edit</span>
          <form onSubmit={handleUpdate} className="profileUpdateForm">
            <div className="profileUpdateLeft">
              <div className="profileUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>First name</label>
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Last name</label>
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Phone number</label>
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className="profileUpdateInput"
                />
              </div>
            </div>
            <div className="profileUpdateRight">
              <div className="profileUpdateUpload">
                <img src="" alt="" className="profileUpdateImg" />
                <label htmlFor="file">
                  <CloudUploadIcon className="profileUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setAva(e.target.value)}
                  value={ava}
                  style={{ display: "none" }}
                />
              </div>
              <button className="profileUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
