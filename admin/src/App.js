import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeacherList from "./pages/teacherList/TeacherList";
import Teacher from "./pages/teacher/Teacher";
import NewTeacher from "./pages/newTeacher/NewTeacher";
import StudentList from "./pages/studentList/StudentList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/teachers/:id" element={<Teacher />} />
          <Route path="/newTeacher" element={<NewTeacher />} />
          <Route path="/students" element={<StudentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
