var express = require("express");
var router = express.Router();
const controller = require("../controllers/suppliers.controller");
/* GET home page. */
router.get("/", controller.getList);
router.get("/create", function (req, res, next) {
  res.render("pages/suppliers/create");
});
router.get("/eidt", function (req, res, next) {
  res.render("pages/suppliers/edit");
});

module.exports = router;
