const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mvcDB");

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);