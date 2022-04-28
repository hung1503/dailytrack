const mongoose = require("mongoose");

const ParentTimeSchema = new mongoose.Schema({
  arrival: String,
  departure: String,
});

const RoutineSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
});

const ActivitySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  parentTime: ParentTimeSchema,
  routine: [RoutineSchema],
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

module.exports = mongoose.model("Activity", ActivitySchema);
