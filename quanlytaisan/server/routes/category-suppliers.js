var express = require("express");
var router = express.Router();
const controller = require("../controllers/category_suppliers.controller");

/* GET home page. */
router.get("/", controller.getList);
router.get("/create", function (req, res, next) {
  res.render("pages/category-suppliers/create");
});
router.get("/eidt", function (req, res, next) {
  res.render("pages/category-suppliers/edit");
});
module.exports = router;
