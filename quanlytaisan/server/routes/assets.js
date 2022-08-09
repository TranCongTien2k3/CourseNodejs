var express = require("express");
var router = express.Router();
const controller = require("../controllers/assets.controller");
const services = require("../service/assets.render");
/* GET home page. */
router.get("/", controller.getList);
// router.get("/", function (req, res, next) {
//   res.render("pages/assets/index");
// });
router.post("/create", controller.add_assets);
router.get("/action", function (req, res, next) {
  res.render("pages/assets/action");
});
router.get("/edit", function (req, res, next) {
  res.render("pages/assets/edit");
});
router.get("/repair", function (req, res, next) {
  res.render("pages/assets/repair");
});
router.get("/repair/history", function (req, res, next) {
  res.render("pages/assets/repair-history");
});
router.get("/sell/history", function (req, res, next) {
  res.render("pages/assets/sell-history");
});
router.get("/sell", function (req, res, next) {
  res.render("pages/assets/sell");
});
router.get("/revoke/history", function (req, res, next) {
  res.render("pages/assets/revoke-history");
});
router.get("/revoke", function (req, res, next) {
  res.render("pages/assets/revoke");
});
router.get("/detail", function (req, res, next) {
  res.render("pages/assets/detail");
});
router.get("/used-history", function (req, res, next) {
  res.render("pages/assets/used-history");
});
//// API
router.get("/", function (req, res, next) {
  res.render("pages/assets/index");
});
router.get("/create", controller.add_assets);
router.get("/action", function (req, res, next) {
  res.render("pages/assets/action");
});
router.get("/edit", function (req, res, next) {
  res.render("pages/assets/edit");
});
router.get("/repair", function (req, res, next) {
  res.render("pages/assets/repair");
});
router.get("/repair/history", function (req, res, next) {
  res.render("pages/assets/repair-history");
});
router.get("/sell/history", function (req, res, next) {
  res.render("pages/assets/sell-history");
});
router.get("/sell", function (req, res, next) {
  res.render("pages/assets/sell");
});
router.get("/revoke/history", function (req, res, next) {
  res.render("pages/assets/revoke-history");
});
router.get("/revoke", function (req, res, next) {
  res.render("pages/assets/revoke");
});
router.get("/detail", function (req, res, next) {
  res.render("pages/assets/detail");
});
router.get("/used-history", function (req, res, next) {
  res.render("pages/assets/used-history");
});

module.exports = router;
