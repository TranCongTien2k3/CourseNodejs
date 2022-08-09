const express = require("express");
var morgan = require("morgan");
const path = require("path");
var initWebRoute = require("./router/api");
const app = express();
const port = 8080;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });
// initWebRoute(app);
app.use("/api/v1/", initWebRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
