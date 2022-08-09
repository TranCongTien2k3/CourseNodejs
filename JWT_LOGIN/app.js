const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRouter");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { PORT, DB_URL } = process.env;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port" + PORT);
  }
});
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser);
app.use(express.json());
app.use("/", authRoute);
