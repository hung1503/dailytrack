import React from "react";
import "./teacher.css";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import ClassIcon from "@mui/icons-material/Class";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Teacher() {
  const { id } = useParams();
  const teacher = useSelector((state) =>
    state.teachers.find((u) => u.id === id)
  );
  if (!teacher) {
    return <div>Loading...</div>;
  }
  return (
    <div className="teacher">
      <div className="teacherTitleContainer">
        <h1 className="teacherTitle">Teacher's detailts</h1>
      </div>
      <div className="teacherContainer">
        <div className="teacherShow">
          <div className="teacherShowTop">
            <img src="" alt="" className="teacherShowImg" />
            <div className="teacherShowTopTitle">
              <span className="teacherShowName">
                {teacher.firstName} {teacher.lastName}
              </span>
              <span className="teacherShowAge">Age: {teacher.age}</span>
            </div>
          </div>
          <div className="teacherShowBottom">
            <span className="teacherShowTitle">Info</span>
            <div className="teacherShowInfo">
              <EmailIcon className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">{teacher.email}</span>
            </div>
            <div className="teacherShowInfo">
              <AddLocationAltIcon className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">{teacher.address}</span>
            </div>
            <div className="teacherShowInfo">
              <PhoneIcon className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">
                {teacher.phonenumber}
              </span>
            </div>
            <div className="teacherShowInfo">
              <ClassIcon className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">
                Class: {teacher.class}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
