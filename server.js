// server.js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample in-memory data
let users = [
  { id: 1, name: "Nimish" },
  { id: 2, name: "Shivani" }
];

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Simple Node.js REST API 🚀");
});

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST add new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
