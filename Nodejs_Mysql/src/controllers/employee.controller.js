const { response } = require("express");
const { Employee } = require("../models/employee.model");

exports.getEmployeeList = async (req, res) => {
  try {
    const [rows, _] = await Employee.getAllEmployee();
    console.log(rows);
    return res.send(rows);
  } catch (error) {
    console.error(error);
  }
};
exports.detail = async (req, res) => {
  await Employee.getById(req.params.id, (err, response) => {
    if (err) {
      res.send(err);
    }
    console.log(response);
    res.send(response);
  });
};
