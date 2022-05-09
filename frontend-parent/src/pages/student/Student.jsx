import React from "react";
import "./student.css";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhoneIcon from "@mui/icons-material/Phone";
import ClassIcon from "@mui/icons-material/Class";

export default function Student({ oneStudentData }) {
  return (
    <div className="student">
      <div className="studentTitleContainer">
        <h1 className="studentTitle">Student's detailts</h1>
      </div>
      <div className="studentContainer">
        <div className="studentShow">
          <div className="studentShowTop">
            <img
              src={oneStudentData.avatar}
              alt=""
              className="studentShowImg"
            />
            <div className="studentShowTopTitle">
              <span className="studentShowName">
                {oneStudentData.firstName} {oneStudentData.lastName}
              </span>
              <span className="studentShowAge">Age: {oneStudentData.age}</span>
            </div>
          </div>
          <div className="studentShowBottom">
            <span className="studentShowTitle">Info</span>
            <div className="studentShowInfo">
              <ClassIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {oneStudentData.class}
              </span>
            </div>
            <div className="studentShowInfo">
              <EmailIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {oneStudentData.email}
              </span>
            </div>
            <div className="studentShowInfo">
              <AddLocationAltIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {oneStudentData.address}
              </span>
            </div>
            <span className="studentShowTitle">Parents' Info</span>
            <div className="studentsShowIcon">
              <span>{oneStudentData.parentsInfo.name1}</span>
            </div>
            <div className="studentShowInfo">
              <PhoneIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {oneStudentData.parentsInfo.phone1}
              </span>
            </div>
          </div>
        </div>
        <div className="studentUpdate">
          <span className="studentUpdateTitle">Edit</span>
          <form action="" className="studentUpdateForm">
            <div className="studentUpdateLeft">
              <div className="studentUpdateItem">
                <label>First name</label>
                <input type="text" className="studentUpdateInput" />
              </div>
              <div className="studentUpdateItem">
                <label>Last name</label>
                <input type="text" className="studentUpdateInput" />
              </div>
              <div className="studentUpdateItem">
                <label>Address</label>
                <input type="text" className="studentUpdateInput" />
              </div>
              <br />
              <span className="studentUpdateTitle">Parents' info</span>
              <div className="studentUpdateItem">
                <label>Parent's name or supervisor</label>
                <input type="text" className="studentUpdateInput" />
              </div>
              <div className="studentUpdateItem">
                <label>Phone number</label>
                <input type="text" className="studentUpdateInput" />
              </div>
              <div className="studentUpdateItem">
                <label>Email</label>
                <input type="text" className="studentUpdateInput" />
              </div>
            </div>
            <div className="studentUpdateRight">
              <div className="studentUpdateUpload">
                <img src="" alt="" className="studentUpdateImg" />
                <label htmlFor="file">
                  <CloudUploadIcon className="studentUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="studentUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
