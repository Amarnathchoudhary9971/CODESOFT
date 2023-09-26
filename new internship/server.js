const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// In-memory task storage (replace with a database in a production environment)
let tasks = [];

// API route to add a task
app.post("/api/tasks", (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    res.json({ message: "Task added successfully" });
});

// Serve the HTML page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
