const router = require("express").Router();
const Activity = require("../models/Activity");
const Student = require("../models/Student");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const activities = await Activity.find({}).populate("student");
  res.send(activities);
});

router.get("/:id", async (req, res) => {
  const activities = await Activity.findById(req.params.id);
  if (activities) {
    res.json(activities.toJSON());
  } else {
    res.status(404).end();
  }
});

router.post("/", async (req, res) => {
  const body = req.body;

  const student = await Student.findById(body.studentId);
  const activity = new Activity({
    date: body.date,
    parentTime: body.parentTime,
    routine: body.routine,
    student: student._id,
  });
  console.log(activity);
  const savedActivity = await activity.save();
  student.activities = student.activities.concat(savedActivity._id);
  await student.save();
  res.json(savedActivity.toJSON());
});

router.post("/:id/routine", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  console.log(body);
  Activity.findByIdAndUpdate(
    { _id: id },
    {
      $addToSet: {
        routine: {
          time: body.time,
          activity: body.activity,
        },
      },
    },
    function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        res.json(doc);
      }
    }
  );
});

router.post("/:id/parentTime", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  console.log(body);
  Activity.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        parentTime: {
          arrival: body.arrival,
          departure: body.departure,
        },
      },
    },
    function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log(doc);
        res.json(doc);
      }
    }
  );
});

router.put("/:id", async (req, res) => {
  const body = req.body;

  const activity = {
    date: body.date,
    parentTime: {
      arrival: body.parentTime.arrival,
      departure: body.parentTime.departure,
    },
    routine: {
      time: body.routine.time,
      activity: body.routine.activity,
    },
  };

  const updatedActivity = await Activity.findByIdAndUpdate(
    req.params.id,
    activity,
    { new: true }
  );
  res.json(updatedActivity.toJSON());
});

router.delete("/:id", async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (activity) {
    await Activity.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

router.put("/:id/routine", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const activity = Activity.findById(id);
  console.log(body);
  activity.updateOne(
    {},
    {
      $pull: {
        routine: {
          _id: body.routineId,
        },
      },
    },
    function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log(doc);
        res.json(doc);
      }
    }
  );
});

module.exports = router;
