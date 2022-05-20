import React from "react";
import "./profile.css";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ClassIcon from "@mui/icons-material/Class";
import { Link } from "react-router-dom";

export default function Profile({ profileInfo }) {
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
                {profileInfo.firstName} {profileInfo.lastName}
              </span>
              <span className="profileShowAge">Age: {profileInfo.age}</span>
            </div>
          </div>
          <div className="profileShowBottom">
            <span className="profileShowTitle">Info</span>
            <div className="profileShowInfo">
              <EmailIcon className="profileShowIcon" />
              <span className="profileShowInfoTitle">{profileInfo.email}</span>
            </div>
            <div className="profileShowInfo">
              <AddLocationAltIcon className="profileShowIcon" />
              <span className="profileShowInfoTitle">
                {profileInfo.address}
              </span>
            </div>
            <div className="profileShowInfo">
              <PhoneIcon className="profileShowIcon" />
              <span className="profileShowInfoTitle">
                {profileInfo.phonenumber}
              </span>
            </div>
            <div className="profileShowInfo">
              <ClassIcon className="profileShowIcon" />
              <span className="profileShowInfoTitle">
                Class: {profileInfo.class}
              </span>
            </div>
          </div>
        </div>
        <div className="profileUpdate">
          <span className="profileUpdateTitle">Edit</span>
          <form action="" className="profileUpdateForm">
            <div className="profileUpdateLeft">
              <div className="profileUpdateItem">
                <label>Email</label>
                <input type="text" className="profileUpdateInput" />
              </div>
              <div className="profileUpdateItem">
                <label>First name</label>
                <input type="text" className="profileUpdateInput" />
              </div>
              <div className="profileUpdateItem">
                <label>Last name</label>
                <input type="text" className="profileUpdateInput" />
              </div>
              <div className="profileUpdateItem">
                <label>Address</label>
                <input type="text" className="profileUpdateInput" />
              </div>
              <div className="profileUpdateItem">
                <label>Phone number</label>
                <input type="text" className="profileUpdateInput" />
              </div>
            </div>
            <div className="profileUpdateRight">
              <div className="profileUpdateUpload">
                <img src="" alt="" className="profileUpdateImg" />
                <label htmlFor="file">
                  <CloudUploadIcon className="profileUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="profileUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
