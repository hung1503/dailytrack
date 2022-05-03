const router = require("express").Router();
const Teacher = require("../models/Teacher");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const teachers = await Teacher.find({}).populate("class");
  res.send(teachers);
});

router.get("/:id", async (req, res) => {
  const teachers = await Teacher.findById(req.params.id);
  if (teachers) {
    res.json(teachers.toJSON());
  } else {
    res.status(404).end();
  }
});

router.post("/", async (req, res) => {
  const body = req.body;

  const foundTeacher = await Teacher.find({ username: body.username });
  if (foundTeacher.length > 0) {
    res.status(400).send("User already exists");
  } else {
    const saltRound = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRound);
    const className = await Class.findById(body.classId);

    const teacher = new Teacher({
      username: body.username,
      password: passwordHash,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phonenumber: body.phonenumber,
      classId: className._id,
      address: body.address,
      avatar: body.avatar,
    });

    const savedTeacher = await teacher.save();
    className.teachers = className.teachers.concat(savedTeacher._id);
    await className.save();
    res.json(savedTeacher.toJSON());
  }
});

router.delete("/:id", async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);

  if (teacher) {
    await Teacher.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

router.put("/:id", async (req, res) => {
  const body = req.body;

  const teacher = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phonenumber: body.phonenumber,
    class: body.class,
    address: body.address,
    avatar: body.avatar,
  };

  const updatedTeacher = await Teacher.findByIdAndUpdate(
    req.params.id,
    teacher,
    { new: true }
  );

  res.json(updatedTeacher.toJSON());
});

module.exports = router;
