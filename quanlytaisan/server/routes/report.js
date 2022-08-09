var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/report-new", function (req, res, next) {
  res.render("pages/report/new");
});
router.get("/create", function (req, res, next) {
  res.render("pages/report/create");
});
router.get("/report-removek", function (req, res, next) {
  res.render("pages/report/revoke");
});
router.get("/report-revoke-poached", function (req, res, next) {
  res.render("pages/report/revoke-poached");
});
router.get("/report-transfer", function (req, res, next) {
  res.render("pages/report/transfer");
});
router.get("/report-use", function (req, res, next) {
  res.render("pages/report/use");
});
router.get("/report-statement", function (req, res, next) {
  res.render("pages/report/statement");
});

module.exports = router;
