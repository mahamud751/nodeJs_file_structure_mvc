const path = require("path");
const students = require("../models/student.model");

exports.getStudents = (req, res) => {
  res.sendFile(path.join(__dirname + "./../views/students.html"));
};

exports.postStudents = (req, res) => {
  const name = req.body.name;
  const roll = req.body.roll;

  const student = {
    name,
    roll,
  };
  students.push(student);
  res.status(200).json({
    success: true,
    students,
  });
};
