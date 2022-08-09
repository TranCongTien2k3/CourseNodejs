var express = require("express");
var morgan = require("morgan");
const bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var app = express();
app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index");
});
app.listen(port, function () {
  console.log("Server on port :", port);
});
