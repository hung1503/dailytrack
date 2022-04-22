import React from "react";
import "./newStudent.css";

export default function NewStudent() {
  return (
    <div className="newStudent">
      <h1 className="newStudentTitle">New Student</h1>
      <form action="" className="newStudentForm">
        <div className="newStudentItem">
          <label>First Name</label>
          <input type="text" className="newStudentInput" />
        </div>
        <div className="newStudentItem">
          <label>Last Name</label>
          <input type="text" className="newStudentInput" />
        </div>
        <div className="newStudentItem">
          <label>Email</label>
          <input type="text" className="newStudentInput" />
        </div>
        <div className="newStudentItem">
          <label>Password</label>
          <input type="password" className="newStudentInput" />
        </div>
        <div className="newStudentItem">
          <label>Phone</label>
          <input type="text" className="newStudentInput" />
        </div>
        <div className="newStudentItem">
          <label>Address</label>
          <input type="text" className="newStudentInput" />
        </div>
        <div className="newStudentItem">
          <label>Assign Class</label>
          <input type="text" className="newStudentInput" />
        </div>
        <div className="newStudentItem">
          <label>Gender</label>
          <div className="newStudentGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div>
          <button className="newStudentButton">Create</button>
        </div>
      </form>
    </div>
  );
}
