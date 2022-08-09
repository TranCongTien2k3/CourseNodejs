var express = require("express");
var router = express.Router();
const controller = require("../controllers/department.controller");
/* GET home page. */
router.get("/", controller.getList);
router.get("/create", function (req, res, next) {
  res.render("pages/departments/create");
});
router.get("/eidt", function (req, res, next) {
  res.render("pages/departments/edit");
});

module.exports = router;
