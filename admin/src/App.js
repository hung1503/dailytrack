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
import ClassList from "./pages/classList/ClassList";
import Class from "./pages/class/Class";
import { teacherRows, studentRows, classRows } from "./data";
import Activities from "./pages/activities/Activities";
import { ConstructionOutlined } from "@mui/icons-material";

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

  const activites = useMatch("/students/:id/activities");
  console.log(activites)
  const activitesInfo = activites
    ? studentRows.find(
        (student) => student.id === Number(activites.params.id)
      )
    : null;
  console.log(activitesInfo)
  
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
            path="/students/:id/activites" 
            element={<Activities activitesInfo={activitesInfo} />}
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
