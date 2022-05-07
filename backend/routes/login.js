const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../utils/config");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");

router.post("/parent", async (req, res) => {
  const body = req.body;
  const student = await Student.findOne({ username: body.username });
  const passwordCorrect =
    student === null
      ? false
      : await bcrypt.compare(body.password, student.password);

  if (!(student && passwordCorrect)) {
    return res.status(401).json({
      error: "invalid username or password",
    });
  }

  const studentForToken = {
    username: student.username,
    id: student._id,
  };

  //token exprire in 1 day
  const token = jwt.sign(studentForToken, config.SECRET, { expiresIn: "1d" });

  res
    .status(200)
    .send({ token, username: student.username, firstname: student.firstName });
});

router.post("/teacher", async (req, res) => {
  const body = req.body;
  const teacher = await Teacher.findOne({ username: body.username });
  const passwordCorrect =
    teacher === null
      ? false
      : await bcrypt.compare(body.password, teacher.password);

  if (!(teacher && passwordCorrect)) {
    return res.status(401).json({
      error: "invalid username or password",
    });
  }

  const teacherForToken = {
    username: teacher.username,
    id: teacher._id,
  };

  //token exprire in 1 day
  const token = jwt.sign(teacherForToken, config.SECRET, { expiresIn: "1d" });

  res
    .status(200)
    .send({ token, username: teacher.username, firstname: teacher.firstName });
});

module.exports = router;
