const router = require("express").Router();
const Class = require("../models/Class");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const classes = await Class.find({})
    .populate("students", { firstName: 1, lastName: 1, email: 1 })
    .populate("teachers");
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

  const foundClass = await Class.find({ class: body.class });
  if (foundClass.length > 0) {
    res.status(400).send("Class already exists");
  } else {
    const newClass = new Class({
      class: body.class,
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
    class: body.class,
  });

  res.json(newClass.toJSON());
});

module.exports = router;
