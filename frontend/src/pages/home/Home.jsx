import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import LoginParents from "../login/LoginParents";
import StudentList from "../studentList/StudentList";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Link to="/students">Students</Link>
      <Link to="/teachers">Teachers</Link>
      <Link to="/classes">Classes</Link>
    </div>
  );
};

export default Home;
