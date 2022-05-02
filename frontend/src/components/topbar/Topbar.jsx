import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
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
            <Link to="/loginStudent" className="link">
              Login as parents
            </Link>
          </div>
          <div className="topButton">
            <Link to="/loginTeacher" className="link">
              Login as teacher
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
