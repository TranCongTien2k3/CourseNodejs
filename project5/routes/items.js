var express = require("express");
var router = express.Router();
var path = require("path");
const multer = require("multer");
const axios = require("axios");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.get("/products/add", upload.single("image"), function (req, res, next) {
  res.render("items/products/add");
});
router.get("/products", function (req, res, next) {
  axios
    .get("http://localhost:8080/api/products")
    .then(function (response) {
      console.log(response.data);
      res.render("items/products/list", { products: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/products/edit", function (req, res, next) {
  res.render("items/products/edit");
});
router.get("/categories/add", function (req, res, next) {
  res.render("items/categories/add");
});
router.get("/categories/edit", function (req, res, next) {
  res.render("items/categories/edit");
});
router.get("/categories", function (req, res, next) {
  axios
    .get("http://localhost:8080/api/categories")
    .then(function (response) {
      console.log(response.data);
      res.render("items/categories/list", { category: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
