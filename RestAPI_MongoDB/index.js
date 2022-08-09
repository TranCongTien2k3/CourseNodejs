require("dotenv").config;
const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const userRoute = require("./routes/user.route");
app.use(helmet());
app.use(morgan("common"));
app.use("/v1", userRoute);

// mongoose.connect("mongodb://localhost:27017/BT", (err) => {
//   if (err) {
//     console.error("loi");
//   } else {
//     console.log("database is connected");
//   }
// });

mongoose
  .connect("mongodb://localhost:27017/admin")
  .then((result) => console.log(`Database connection Sucess`))
  .catch((err) => console.error(`Database connection false`));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
