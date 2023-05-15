// Setup empty JS object to act as endpoint for all routes
projectData = {};
let index = 0;

// Require Express to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Start up an instance of app
const app = express();

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// ROUTES
app.get("/temperature", (req, res) => {
  res.status(200).json({ status: "success", data: projectData });
});

app.post("/", (req, res) => {
  projectData[index] = req.body;
  index++;
  res.status(200).json({ status: "success", data: projectData });
});

// Setup Server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
