const express = require("express");
const {
  getStudents,
  postStudents,
} = require("../controllers/student.controller");

const studentRoute = express.Router();

studentRoute.get("/students", getStudents);
studentRoute.post("/students", postStudents);

module.exports = studentRoute;
