import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar({ user, handleLogout }) {
  if (user) {
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <Link to="/" className="link">
              <span className="logo">DailyTrack</span>
            </Link>
          </div>
          <div className="topRight">
            <div className="topButton">
              <button onClick={handleLogout}>Log out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">DailyTrack</span>
          </Link>
        </div>
        {/* <div className="topRight">
          <div className="topButton">
            <Link to="/loginParents" className="link">
              Login as parents
            </Link>
          </div>
          <div className="topButton">
            <Link to="/loginTeachers" className="link">
              Login as teacher
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
