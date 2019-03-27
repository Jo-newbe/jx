const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: "/images/avatar/default.png"
  },
  password: {
    type: String,
    required: true
  }
});

let UserModel = (module.exports = mongoose.model("users", UserSchema));
