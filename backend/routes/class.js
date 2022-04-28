const router = require("express").Router();
const Class = require("../models/Class");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const classes = await Class.find({});
  res.send(classes);
});

router.get("/:id", async (req, res) => {
  const classes = await Class.findById(req.params.id);
  if (classes) {
    res.json(classes.toJSON());
  } else {
    res.status(404).end();
  }
});

router.post("/", async (req, res) => {
  const body = req.body;

  const foundClass = await Class.find({ className: body.className });
  if (foundClass.length > 0) {
    res.status(400).send("Class already exists");
  } else {
    const newClass = new Class({
      className: body.className,
      teachers: body.teacher,
    });

    const savedClass = await newClass.save();
    res.json(savedClass.toJSON());
  }
});

router.delete("/:id", async (req, res) => {
  const classs = await Class.findById(req.params.id);

  if (classs) {
    await Class.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

router.put("/:id", async (req, res) => {
  const body = req.body;

  const newClass = await Class.findByIdAndUpdate(req.params.id, {
    className: body.className,
    teachers: body.teacher,
  });

  res.json(newClass.toJSON());
});

module.exports = router;
