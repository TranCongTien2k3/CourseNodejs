var express = require("express");
var router = express.Router();
const controller = require("../controllers/group_assets.controller");

/* GET home page. */
router.get("/", controller.getList);
router.get("/create", controller.add);
router.get("/eidt", function (req, res, next) {
  res.render("pages/group-assets/edit");
});

module.exports = router;
