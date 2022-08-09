var express = require("express");
var router = express.Router();
var categor_assetsController = require("../controllers/category_assets.controller");

/* GET home page. */
router.get("/", categor_assetsController.getList);
router.get("/create", function (req, res, next) {
  res.render("pages/category-assets/create");
});
router.get("/eidt", function (req, res, next) {
  res.render("pages/category-assets/edit");
});

module.exports = router;
