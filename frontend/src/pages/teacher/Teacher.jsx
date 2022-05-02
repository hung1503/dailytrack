import React from "react";
import "./teacher.css";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ClassIcon from "@mui/icons-material/Class";
import { Link } from "react-router-dom";

export default function Teacher({ teacherInfo }) {
  return (
    <div className="teacher">
      <div className="teacherTitleContainer">
        <h1 className="teacherTitle">Edit teacher</h1>
        <Link to="/newTeacher">
          <button className="teacherAddButton">Create</button>
        </Link>
      </div>
      <div className="teacherContainer">
        <div className="teacherShow">
          <div className="teacherShowTop">
            <img src="" alt="" className="teacherShowImg" />
            <div className="teacherShowTopTitle">
              <span className="teacherShowName">
                {teacherInfo.firstName} {teacherInfo.lastName}
              </span>
              <span className="teacherShowAge">Age: {teacherInfo.age}</span>
            </div>
          </div>
          <div className="teacherShowBottom">
            <span className="teacherShowTitle">Info</span>
            <div className="teacherShowInfo">
              <EmailIcon className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">{teacherInfo.email}</span>
            </div>
            <div className="teacherShowInfo">
              <AddLocationAltIcon className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">
                {teacherInfo.address}
              </span>
            </div>
            <div className="teacherShowInfo">
              <PhoneIcon className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">
                {teacherInfo.phonenumber}
              </span>
            </div>
            <div className="teacherShowInfo">
              <ClassIcon className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">
                Class: {teacherInfo.class}
              </span>
            </div>
          </div>
        </div>
        <div className="teacherUpdate">
          <span className="teacherUpdateTitle">Edit</span>
          <form action="" className="teacherUpdateForm">
            <div className="teacherUpdateLeft">
              <div className="teacherUpdateItem">
                <label>Email</label>
                <input type="text" className="teacherUpdateInput" />
              </div>
              <div className="teacherUpdateItem">
                <label>First name</label>
                <input type="text" className="teacherUpdateInput" />
              </div>
              <div className="teacherUpdateItem">
                <label>Last name</label>
                <input type="text" className="teacherUpdateInput" />
              </div>
              <div className="teacherUpdateItem">
                <label>Address</label>
                <input type="text" className="teacherUpdateInput" />
              </div>
              <div className="teacherUpdateItem">
                <label>Phone number</label>
                <input type="text" className="teacherUpdateInput" />
              </div>
              <div className="teacherUpdateItem">
                <label>Assign class</label>
                <input type="text" className="teacherUpdateInput" />
              </div>
            </div>
            <div className="teacherUpdateRight">
              <div className="teacherUpdateUpload">
                <img src="" alt="" className="teacherUpdateImg" />
                <label htmlFor="file">
                  <CloudUploadIcon className="teacherUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="teacherUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
