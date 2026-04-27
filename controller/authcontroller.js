const User = require("../models/userModel");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (user) {
    res.sendFile(__dirname + "/../view/dashboard.html");
  } else {
    res.send("Invalid Login");
  }
};