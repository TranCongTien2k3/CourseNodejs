var express = require("express");
var router = express.Router();
const controller = require("../controllers/staffs.controller");
/* GET home page. */
router.get("/", controller.getList);
router.get("/create", function (req, res, next) {
  res.render("pages/staffs/create");
});

router.get("/eidt", function (req, res, next) {
  res.render("pages/staffs/edit");
});

router.get("/detail", function (req, res, next) {
  res.render("pages/staffs/detail");
});
module.exports = router;
