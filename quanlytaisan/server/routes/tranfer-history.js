var express = require("express");
var router = express.Router();
const controller = require("../controllers/transfer.controller");
/* GET home page. */
router.get("/", controller.getList);
router.get("/create-depart", function (req, res, next) {
  res.render("pages/transfer-history/create-depart");
});
router.get("/staff-transfer", function (req, res, next) {
  res.render("pages/transfer-history/staff-transfer");
});
router.get("/staff", function (req, res, next) {
  res.render("pages/transfer-history/staff");
});
router.get("/department", function (req, res, next) {
  res.render("pages/transfer-history/department");
});
router.get("/department-transfer", function (req, res, next) {
  res.render("pages/transfer-history/department-transfer");
});
router.get("/create-staff", function (req, res, next) {
  res.render("pages/transfer-history/create-staff");
});
router.get("/history-staff", function (req, res, next) {
  res.render("pages/transfer-history/history-staff");
});
router.get("/history-depart", function (req, res, next) {
  res.render("pages/transfer-history/history-depart");
});

module.exports = router;
