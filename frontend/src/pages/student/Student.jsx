import React from "react";
import "./student.css";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ClassIcon from '@mui/icons-material/Class';
import { Link } from "react-router-dom";
import { DomainVerification } from "@mui/icons-material";

export default function Student({ studentInfo }) {
  console.log(studentInfo);
  return (
    <div className="student">
      <div className="studentTitleContainer">
        <h1 className="studentTitle">Edit student</h1>
        <Link to="/newstudent">
          <button className="studentAddButton">Create</button>
        </Link>
      </div>
      <div className="studentContainer">
        <div className="studentShow">
          <div className="studentShowTop">
            <img src={studentInfo.avatar} alt="" className="studentShowImg" />
            <div className="studentShowTopTitle">
              <span className="studentShowName">
                {studentInfo.firstName} {studentInfo.lastName}
              </span>
              <span className="studentShowAge">Age: {studentInfo.age}</span>
            </div>
          </div>
          <div className="studentShowBottom">
            <span className="studentShowTitle">Info</span>
            <div className="studentShowInfo">
              <ClassIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {studentInfo.class}
              </span>
            </div>
            <div className="studentShowInfo">
              <EmailIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {studentInfo.parentsInfo.email}
              </span>
            </div>
            <div className="studentShowInfo">
              <AddLocationAltIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {studentInfo.address}
              </span>
            </div>
            <span className="studentShowTitle">Parents' Info</span>
            <div className="studentsShowIcon">
              <span>{studentInfo.parentsInfo.name1}</span>
            </div>
            <div className="studentShowInfo">
              <PhoneIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {studentInfo.parentsInfo.phone1}
              </span>
            </div>
            <div className="studentsShowIcon">
              <span>{studentInfo.parentsInfo.name2}</span>
            </div>
            <div className="studentShowInfo">
              <PhoneIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {studentInfo.parentsInfo.phone2}
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
              <div className="studentUpdateItem">
                <label>Class</label>
                <input type="text" className="studentUpdateInput" />
              </div>
              <br/>
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
