const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

module.exports = mongoose.model("Class", ClassSchema);
