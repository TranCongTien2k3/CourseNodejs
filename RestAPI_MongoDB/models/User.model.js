const mongoose = require("mongoose");
const Scheme = mongoose.Schema();
const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
  },
  isAdmin: {
    type: Boolean,
    require: true,
  },
});
module.exports = mongoose.model("Users", UserSchema);
