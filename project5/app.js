var createError = require("http-errors");
var express = require("express");
var path = require("path");
const dotenv = require("dotenv");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var expressLayouts = require("express-ejs-layouts");
const multer = require("multer");

// require user
const connectDB = require("./server/database/connection");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var itemRouter = require("./routes/items");
var apiRouter = require("./routes/api");
var app = express();
dotenv.config({ path: "config.env" });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Image");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

//
const upload = multer({ storage: storage });
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "dashboard");
//
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// mongoDb connection
connectDB();
/// app user
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/items", itemRouter);
app.use("/api", apiRouter);
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
