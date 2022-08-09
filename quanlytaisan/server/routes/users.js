var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("pages/user/index");
});
router.get("/create", function (req, res, next) {
  res.render("pages/user/create");
});
router.get("/eidt", function (req, res, next) {
  res.render("pages/user/edit");
});
router.get("/login", function (req, res, next) {
  res.render("pages/user/login");
});
router.get("/logout", function (req, res, next) {
  res.render("pages/user/logout");
});
router.get("/register", function (req, res, next) {
  res.render("pages/user/register");
});

module.exports = router;
