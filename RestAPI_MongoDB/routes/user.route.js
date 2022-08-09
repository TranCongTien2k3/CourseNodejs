const express = require("express");
const route = express.Router();

// creat a getuser
route.get("/users", (req, res, next) => {
  res.json({
    status: "success",
    elements: [{}],
  });
});
// create a post
route.post("/", (req, res, next) => {
  res.send("THis is Home Page");
});

// create a pust
route.put("/", (req, res, next) => {
  res.send("THis is Home Page");
});

// create a delete
route.delete("/", (req, res, next) => {
  res.send("THis is Home Page");
});

module.exports = route;
