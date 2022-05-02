import React from "react";
import "./homeMid.css";
import { Link } from "react-router-dom";

const HomeMid = () => {
  return (
    <div className="homeMidContainer" id="bg-img">
      <div className="homeMidLogin">
        <div>
          <Link to="/" className="link">
            Login as parents
          </Link>
        </div>
        <div>
          <Link to="/" className="link">
            Login as teacher
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMid;
