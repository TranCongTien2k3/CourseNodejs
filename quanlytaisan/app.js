var createError = require("http-errors");
var express = require("express");
var path = require("path");
const dotenv = require("dotenv");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var expressLayouts = require("express-ejs-layouts");
const multer = require("multer");

var indexRouter = require("./server/routes/index");
var usersRouter = require("./server/routes/users");
var assetsRouter = require("./server/routes/assets");
var categoryAssetsRouter = require("./server/routes/category-assets");
var categorySuppliersRouter = require("./server/routes/category-suppliers");
var dashboardRouter = require("./server/routes/dashboard");
var departmentsRouter = require("./server/routes/departments");
var groupAssetsRouter = require("./server/routes/group-assets");
var reportRouter = require("./server/routes/report");
var suppliersRouter = require("./server/routes/suppliers");
var staffsRouter = require("./server/routes/staffs");
var tranferHistoryRouter = require("./server/routes/tranfer-history");

var app = express();
dotenv.config({ path: "config.env" });
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/main-layout");
///
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/assets", assetsRouter);
app.use("/category-assets", categoryAssetsRouter);
app.use("/category-suppliers", categorySuppliersRouter);
app.use("/dashboard", dashboardRouter);
app.use("/departments", departmentsRouter);
app.use("/group-assets", groupAssetsRouter);
app.use("/report", reportRouter);
app.use("/suppliers", suppliersRouter);
app.use("/staffs", staffsRouter);
app.use("/transfer", tranferHistoryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
