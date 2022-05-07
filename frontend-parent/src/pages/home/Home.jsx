import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <Link to="/students">Students</Link>
      <Link to="/teachers">Teachers</Link>
      <Link to="/classes">Classes</Link>
    </div>
  );
};

export default Home;
