var express = require("express");
var homepageController = require("../controllers/homepageController");
let router = express.Router();
let initAllWebRoutes = (app) => {
  router.get("/", homepageController.getHomepage);
  return app.use("/", router);
};
module.exports = initAllWebRoutes;
