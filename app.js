const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const authController = require("./controller/authcontroller");
const User = require("./models/usermodel");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view/login.html"));
});

// Load register page
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "view/register.html"));
});

// Handle login
app.post("/login", authController.login);

// Create new user
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.send("User registered successfully!");
  } catch (error) {
    res.send("Error registering user: " + error.message);
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));