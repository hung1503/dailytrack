require("dotenv").config();

const SECRET = process.env.SECRET;
const PORT = process.env.PORT;
const MONGO_URL =
  process.env.NODE_ENV === "test"
    ? process.env.MONGO_URL_TEST
    : process.env.MONGO_URL;

module.exports = {
  SECRET,
  PORT,
  MONGO_URL,
};
