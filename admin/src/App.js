import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import { Route, Routes, useMatch } from "react-router-dom";

import TeacherList from "./pages/teacherList/TeacherList";
import Teacher from "./pages/teacher/Teacher";
import NewTeacher from "./pages/newTeacher/NewTeacher";

import StudentList from "./pages/studentList/StudentList";
import Student from "./pages/student/Student";
import NewStudent from "./pages/newStudent/NewStudent";

import ClassList from "./pages/classList/ClassList";
import Class from "./pages/class/Class";
import NewClass from "./pages/newClass/NewClass";

import Activities from "./pages/activities/Activities";
import DailyActivity from "./pages/dailyActivity/DailyActivity";

import { teacherRows, studentRows, classRows } from "./data";
function App() {
  const teacherMatch = useMatch("/teachers/:id");
  const teacherInfo = teacherMatch
    ? teacherRows.find(
        (teacher) => teacher.id === Number(teacherMatch.params.id)
      )
    : null;

  const studentMatch = useMatch("/students/:id");
  const studentInfo = studentMatch
    ? studentRows.find(
        (student) => student.id === Number(studentMatch.params.id)
      )
    : null;

  const activitiesMatch = useMatch("/students/:id/activities");
  const activitiesInfo = activitiesMatch
    ? studentRows.find(
        (student) => student.id === Number(activitiesMatch.params.id)
      )
    : null;
  
  const dailyActivityMatch = useMatch("/students/:id/activities/:date");
  const dailyActivityInfo = dailyActivityMatch
    ? studentRows.find(
        (student) => student.id === Number(dailyActivityMatch.params.id)
      )
    : null;
  const dateInfo = dailyActivityMatch
    ? dailyActivityInfo.activities.find(
      (date) => date.date === dailyActivityMatch.params.date
    )
    : null;
  
  const classMatch = useMatch("/classes/:id");
  const classInfo = classMatch
    ? classRows.find(
        (classInfo) => classInfo.id === Number(classMatch.params.id)
      )
    : null;

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route
            path="/teachers/:id"
            element={<Teacher teacherInfo={teacherInfo} />}
          />
          <Route path="/newTeacher" element={<NewTeacher />} />
          <Route path="/students" element={<StudentList />} />
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
            element={<DailyActivity dateInfo={dateInfo} dailyActivityInfo={dailyActivityInfo}/>}  
          />
          <Route path="/newStudent" element={<NewStudent />} />
          <Route path="/classes" element={<ClassList />} />
          <Route
            path="/classes/:id"
            element={<Class classInfo={classInfo} />}
          />
          <Route path="/newClass" element={<NewClass />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
