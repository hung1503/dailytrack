import React, { useState } from "react";
import "./student.css";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhoneIcon from "@mui/icons-material/Phone";
import ClassIcon from "@mui/icons-material/Class";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../../reducer/studentReducer";

export default function Student({ user }) {
  const profile = useSelector((state) =>
    state.students.find((u) => u.username === user.username)
  );

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [parentName, setParentName] = useState("");
  const [ava, setAva] = useState("");

  const handleUpdate = (e) => {
    const updatedStudent = {
      firstName,
      lastName,
      email,
      parentsInfo: {
        name1: parentName,
        phone1: phone,
      },
      ava,
    };

    dispatch(updateStudent(profile.id, updatedStudent));
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setParentName("");
    setAva("");
  };
  if (!profile) {
    return <div>loading ...</div>;
  }

  return (
    <div className="student">
      <div className="studentTitleContainer">
        <h1 className="studentTitle">Student's detailts</h1>
      </div>
      <div className="studentContainer">
        <div className="studentShow">
          <div className="studentShowTop">
            <img src={profile.avatar} alt="" className="studentShowImg" />
            <div className="studentShowTopTitle">
              <span className="studentShowName">
                {profile.firstName} {profile.lastName}
              </span>
              <span className="studentShowAge">Age: {profile.age}</span>
            </div>
          </div>
          <div className="studentShowBottom">
            <span className="studentShowTitle">Info</span>
            <div className="studentShowInfo">
              <ClassIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">{profile.class}</span>
            </div>
            <div className="studentShowInfo">
              <EmailIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">{profile.email}</span>
            </div>
            <div className="studentShowInfo">
              <AddLocationAltIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">{profile.address}</span>
            </div>
            <span className="studentShowTitle">Parents' Info</span>
            <div className="studentsShowIcon">
              <span>{profile.parentsInfo.name1}</span>
            </div>
            <div className="studentShowInfo">
              <PhoneIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {profile.parentsInfo.phone1}
              </span>
            </div>
          </div>
        </div>
        <div className="studentUpdate">
          <span className="studentUpdateTitle">Edit</span>
          <form onSubmit={handleUpdate} className="studentUpdateForm">
            <div className="studentUpdateLeft">
              <div className="studentUpdateItem">
                <label>First name</label>
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="studentUpdateInput"
                />
              </div>
              <div className="studentUpdateItem">
                <label>Last name</label>
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="studentUpdateInput"
                />
              </div>
              <div className="studentUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  className="studentUpdateInput"
                />
              </div>
              <br />
              <span className="studentUpdateTitle">Parents' info</span>
              <div className="studentUpdateItem">
                <label>Parent's name or supervisor</label>
                <input
                  type="text"
                  onChange={(e) => setParentName(e.target.value)}
                  value={parentName}
                  className="studentUpdateInput"
                />
              </div>
              <div className="studentUpdateItem">
                <label>Phone number</label>
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className="studentUpdateInput"
                />
              </div>
              <div className="studentUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="studentUpdateInput"
                />
              </div>
            </div>
            <div className="studentUpdateRight">
              <div className="studentUpdateUpload">
                <img src="" alt="" className="studentUpdateImg" />
                <label htmlFor="file">
                  <CloudUploadIcon className="studentUpdateIcon" />
                </label>
                <input
                  type="file"
                  onChange={(e) => setAva(e.target.value)}
                  value={ava}
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="studentUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
