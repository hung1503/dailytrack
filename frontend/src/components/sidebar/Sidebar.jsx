import React from "react";
import "./sidebar.css";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/students" className="link">
              <li className="sidebarListItem">
                <ChildCareIcon className="sidebarIcon" /> Students
              </li>
            </Link>
            <Link to="/classes" className="link">
              <li className="sidebarListItem">
                <BookIcon className="sidebarIcon" /> Classes
              </li>
            </Link>
            <Link to="/teachers" className="link">
              <li className="sidebarListItem">
                <AccountBoxIcon className="sidebarIcon" /> Teachers
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
