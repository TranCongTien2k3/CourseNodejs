require("dotenv").config({ path: ".env" });
const express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const initWebRoutes = require("./src/routers/web");
let app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./src/public")));
initWebRoutes(app);
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is running at the port ${port}`);
});
