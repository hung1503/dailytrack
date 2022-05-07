import React from "react";
import "./student.css";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import ClassIcon from "@mui/icons-material/Class";

export default function Student({ studentInfo }) {
  return (
    <div className="student">
      <div className="studentTitleContainer">
        <h1 className="studentTitle">Student details</h1>
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
              <span className="studentShowInfoTitle">{studentInfo.class}</span>
            </div>
            <div className="studentShowInfo">
              <EmailIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">{studentInfo.email}</span>
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
      </div>
    </div>
  );
}
