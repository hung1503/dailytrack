const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("express-async-errors");
const studentRoute = require("./routes/student");
const teacherRoute = require("./routes/teacher");
const classRoute = require("./routes/class");
const activityRoute = require("./routes/activity");
const loginRoute = require("./routes/login");

const { errorHandler, userExtractor } = require("./utils/middleware");
const logger = require("./utils/logger");

logger.info("Connecting to ", config.MONGO_URL);
mongoose
  .connect(config.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("Connected to database!"))
  .catch((err) => {
    logger.error("Error connecting to database", err.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/students", studentRoute);
app.use("/api/teachers", teacherRoute);
app.use("/api/classes", classRoute);
app.use("/api/activities", userExtractor, activityRoute);
app.use("/api/login", loginRoute);

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port " + process.env.PORT);
});
