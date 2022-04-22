import React from "react";
import "./newTeacher.css";

export default function NewTeacher() {
  return (
    <div className="newTeacher">
      <h1 className="newTeacherTitle">New Teacher</h1>
      <form action="" className="newTeacherForm">
        <div className="newTeacherItem">
          <label>First Name</label>
          <input type="text" className="newTeacherInput" />
        </div>
        <div className="newTeacherItem">
          <label>Last Name</label>
          <input type="text" className="newTeacherInput" />
        </div>
        <div className="newTeacherItem">
          <label>Email</label>
          <input type="text" className="newTeacherInput" />
        </div>
        <div className="newTeacherItem">
          <label>Password</label>
          <input type="password" className="newTeacherInput" />
        </div>
        <div className="newTeacherItem">
          <label>Phone</label>
          <input type="text" className="newTeacherInput" />
        </div>
        <div className="newTeacherItem">
          <label>Address</label>
          <input type="text" className="newTeacherInput" />
        </div>
        <div className="newTeacherItem">
          <label>Assign Class</label>
          <input type="text" className="newTeacherInput" />
        </div>
        <div className="newTeacherItem">
          <label>Gender</label>
          <div className="newTeacherGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div>
          <button className="newTeacherButton">Create</button>
        </div>
      </form>
    </div>
  );
}
