import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import "./app.css";
import { Route, Routes, useMatch } from "react-router-dom";

import TeacherList from "./pages/teacherList/TeacherList";

import Student from "./pages/student/Student";

import Activities from "./pages/activities/Activities";
import DailyActivity from "./pages/dailyActivity/DailyActivity";

import Topbar from "./components/topbar/Topbar";
import Notification from "./components/notification/Notification";
import Sidebar from "./components/sidebar/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { initStudent } from "./reducer/studentReducer";
import { initTeacher } from "./reducer/teacherReducer";
import { initActivity } from "./reducer/activityReducer";
import { initClass } from "./reducer/classReducer";
import { noti } from "./reducer/notificationReducer";

import activityService from "./services/function/activity";
import loginParentService from "./services/login/loginParents";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function App() {
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const teachers = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(initStudent());
    dispatch(initTeacher());
    dispatch(initActivity());
    dispatch(initClass());
  }, [dispatch]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedStudent");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      activityService.setToken(user.token);
    }
  }, []);

  const oneStudentData = user
    ? students.find((student) => student.username === user.username)
    : null;

  const dailyActivityMatch = useMatch("/activities/:date");
  const dateInfo = dailyActivityMatch
    ? oneStudentData.activities.find(
        (date) => date.date === dailyActivityMatch.params.date
      )
    : null;

  const handleLogout = () => {
    window.localStorage.removeItem("loggedStudent");
    setUser(null);
  };

  if (!user) {
    const LoginParents = () => {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const userParent = await loginParentService.login({
            username,
            password,
          });
          window.localStorage.setItem(
            "loggedStudent",
            JSON.stringify(userParent)
          );
          activityService.setToken(userParent.token);
          setUsername("");
          setPassword("");
          setUser(userParent);
          dispatch(noti("Login Successful", 3000, "success"));
        } catch (error) {
          console.log(error);
          dispatch(noti("Login Failed", 3000, "error"));
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
                <EscalatorWarningIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log in as parents
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
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
        <LoginParents />
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
          <Route
            path="/teachers"
            element={<TeacherList teachers={teachers} />}
          />
          <Route
            path="/students"
            element={<Student oneStudentData={oneStudentData} />}
          />
          <Route
            path="/activities"
            element={<Activities oneStudentData={oneStudentData} />}
          />
          <Route
            path="/activities/:date"
            element={
              <DailyActivity
                dateInfo={dateInfo}
                oneStudentData={oneStudentData}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
