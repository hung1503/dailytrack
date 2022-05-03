import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import "./app.css";
import { Route, Routes, useMatch } from "react-router-dom";

import TeacherList from "./pages/teacherList/TeacherList";
import Teacher from "./pages/teacher/Teacher";

import StudentList from "./pages/studentList/StudentList";
import Student from "./pages/student/Student";

import ClassList from "./pages/classList/ClassList";
import Class from "./pages/class/Class";

import Activities from "./pages/activities/Activities";
import DailyActivity from "./pages/dailyActivity/DailyActivity";

import { useDispatch, useSelector } from "react-redux";
import { initStudent } from "./reducer/studentReducer";
import { initTeacher } from "./reducer/teacherReducer";

function App() {
  const [classes, setClasses] = useState([]);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const teachers = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(initStudent());
    dispatch(initTeacher());
  }, [dispatch]);
  console.log(students);

  const teacherMatch = useMatch("/teachers/:id");
  const teacherInfo = teacherMatch
    ? teachers.find((teacher) => teacher.id === teacherMatch.params.id)
    : null;

  const studentMatch = useMatch("/students/:id");
  const studentInfo = studentMatch
    ? students.find((student) => student.id === studentMatch.params.id)
    : null;

  const activitiesMatch = useMatch("/students/:id/activities");
  const activitiesInfo = activitiesMatch
    ? students.find((student) => student.id === activitiesMatch.params.id)
    : null;

  const dailyActivityMatch = useMatch("/students/:id/activities/:date");
  const dailyActivityInfo = dailyActivityMatch
    ? students.find((student) => student.id === dailyActivityMatch.params.id)
    : null;

  const dateInfo = dailyActivityMatch
    ? dailyActivityInfo.activities.find(
        (date) => date.date === dailyActivityMatch.params.date
      )
    : null;

  const classMatch = useMatch("/classes/:id");
  const classInfo = classMatch
    ? classes.find((classInfo) => classInfo.id === Number(classMatch.params.id))
    : null;

  return (
    <div>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/teachers"
            element={<TeacherList teachers={teachers} />}
          />
          <Route
            path="/teachers/:id"
            element={<Teacher teacherInfo={teacherInfo} />}
          />
          <Route
            path="/students"
            element={<StudentList students={students} />}
          />
          <Route
            path="/students/:id"
            element={<Student studentInfo={studentInfo} />}
          />
          <Route
            path="/students/:id/activities"
            element={<Activities activitiesInfo={activitiesInfo} />}
          />
          <Route
            path="/students/:id/activities/:date"
            element={
              <DailyActivity
                dateInfo={dateInfo}
                dailyActivityInfo={dailyActivityInfo}
              />
            }
          />
          <Route path="/classes" element={<ClassList />} />
          <Route
            path="/classes/:id"
            element={<Class classInfo={classInfo} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
