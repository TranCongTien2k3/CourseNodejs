const express = require("express");
const router = express.Router();
const employeeCL = require("../controllers/employee.controller");

router.get("/", employeeCL.getEmployeeList);
router.get("/:id", employeeCL.detail);
module.exports = router;
