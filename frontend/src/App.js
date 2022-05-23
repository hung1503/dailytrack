import React, { useState, useEffect } from "react";
import "./app.css";
import { Route, Routes, useMatch, Link } from "react-router-dom";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import TeacherList from "./pages/teacherList/TeacherList";
import Teacher from "./pages/teacher/Teacher";

import StudentList from "./pages/studentList/StudentList";
import Student from "./pages/student/Student";

import ClassList from "./pages/classList/ClassList";
import Class from "./pages/class/Class";

import Activities from "./pages/activities/Activities";
import DailyActivity from "./pages/dailyActivity/DailyActivity";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Notification from "./components/notification/Notification";

import { useDispatch, useSelector } from "react-redux";
import { initStudent } from "./reducer/studentReducer";
import { initTeacher } from "./reducer/teacherReducer";
import { initActivity } from "./reducer/activityReducer";
import { initClass } from "./reducer/classReducer";
import { noti } from "./reducer/notificationReducer";

import activityService from "./services/function/activity";
import loginTeacherService from "./services/login/loginTeacher";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function App() {
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initStudent());
    dispatch(initTeacher());
    dispatch(initActivity());
    dispatch(initClass());
  }, [dispatch]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      activityService.setToken(user.token);
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    setUser(null);
  };

  if (!user) {
    const LoginTeachers = () => {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
          const userTeacher = await loginTeacherService.login({
            username,
            password,
          });
          window.localStorage.setItem(
            "loggedUser",
            JSON.stringify(userTeacher)
          );
          console.log(userTeacher);
          activityService.setToken(userTeacher.token);
          setUsername("");
          setPassword("");
          setUser(userTeacher);
          dispatch(noti("Login Successful", 2000, "success"));
        } catch (error) {
          console.log(error);
          dispatch(noti("Login Failed", 2000, "error"));
        }
      };

      return (
        <ThemeProvider theme={theme}>
          <Notification />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <AccountBoxIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log in as teachers
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
    };
    return (
      <div>
        <Topbar user={user} handleLogout={handleLogout} />
        <LoginTeachers />
      </div>
    );
  }

  return (
    <div>
      <Topbar user={user} handleLogout={handleLogout} />
      <div className="container">
        <Sidebar />
        <Notification />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/teachers/:id" element={<Teacher />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/students/:id/activities" element={<Activities />} />
          <Route
            path="/students/:id/activities/:dateId"
            element={<DailyActivity />}
          />
          <Route path="/classes" element={<ClassList />} />
          <Route path="/classes/:id" element={<Class />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
