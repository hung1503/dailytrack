const router = require("express").Router();
const Student = require("../models/Student");
const Class = require("../models/Class");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const students = await Student.find({})
    .populate("activities")
    .populate("classId", { class: 1 });
  res.send(students);
});

router.get("/:id", async (req, res) => {
  const students = await Student.findById(req.params.id);
  if (students) {
    res.json(students.toJSON());
  } else {
    res.status(404).end();
  }
});

router.post("/", async (req, res) => {
  const body = req.body;

  const foundStudent = await Student.find({ username: body.username });
  if (foundStudent.length > 0) {
    res.status(400).send("User already exists");
  } else {
    const saltRound = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRound);
    const className = await Class.findById(body.classId);
    const student = new Student({
      username: body.username,
      password: passwordHash,
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      classId: className._id,
      age: body.age,
      avatar: body.avatar,
      parentsInfo: {
        name1: body.parentsInfo.name1,
        name2: body.parentsInfo.name2,
        phone1: body.parentsInfo.phone1,
        phone2: body.parentsInfo.phone2,
      },
    });

    const savedStudent = await student.save();
    className.students = className.students.concat(savedStudent._id);
    await className.save();
    res.json(savedStudent.toJSON());
  }
});

router.delete("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (student) {
    await Student.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

router.put("/:id", async (req, res) => {
  const body = req.body;

  const student = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    class: body.class,
    age: body.age,
    avartar: body.avatar,
    parentsInfo: {
      name1: body.parentsInfo.name1,
      name2: body.parentsInfo.name2,
      phone1: body.parentsInfo.phone1,
      phone2: body.parentsInfo.phone2,
    },
  };

  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    student,
    { new: true }
  );
  res.json(updatedStudent.toJSON());
});

module.exports = router;
