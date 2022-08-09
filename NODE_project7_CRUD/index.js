const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users.js");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("server running ");
});
