import React from "react";
import "./teacher.css";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import ClassIcon from "@mui/icons-material/Class";

export default function Teacher({ teacherInfo }) {
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
      </div>
    </div>
  );
}
