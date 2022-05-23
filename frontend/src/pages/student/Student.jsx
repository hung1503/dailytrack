import React from "react";
import "./student.css";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import ClassIcon from "@mui/icons-material/Class";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Student() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const student = useSelector((state) =>
    state.students.find((u) => u.id === id)
  );
  if (!student) {
    return <div>Loading...</div>;
  }
  return (
    <div className="student">
      <div className="studentTitleContainer">
        <h1 className="studentTitle">Student details</h1>
      </div>
      <div className="studentContainer">
        <div className="studentShow">
          <div className="studentShowTop">
            <img src={student.avatar} alt="" className="studentShowImg" />
            <div className="studentShowTopTitle">
              <span className="studentShowName">
                {student.firstName} {student.lastName}
              </span>
              <span className="studentShowAge">Age: {student.age}</span>
            </div>
          </div>
          <div className="studentShowBottom">
            <span className="studentShowTitle">Info</span>
            <div className="studentShowInfo">
              <ClassIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">{student.class}</span>
            </div>
            <div className="studentShowInfo">
              <EmailIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">{student.email}</span>
            </div>
            <div className="studentShowInfo">
              <AddLocationAltIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">{student.address}</span>
            </div>
            <span className="studentShowTitle">Parents' Info</span>
            <div className="studentsShowIcon">
              <span>{student.parentsInfo.name1}</span>
            </div>
            <div className="studentShowInfo">
              <PhoneIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {student.parentsInfo.phone1}
              </span>
            </div>
            <div className="studentsShowIcon">
              <span>{student.parentsInfo.name2}</span>
            </div>
            <div className="studentShowInfo">
              <PhoneIcon className="studentShowIcon" />
              <span className="studentShowInfoTitle">
                {student.parentsInfo.phone2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
