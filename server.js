// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;
const fakeTasks = [];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Api end points
//task api end points
app.get("/api/v1/task", (req, res) => {
  //replace the tasks with the real ones from databases

  res.json({ message: "you made a get call", tasks: fakeTasks });
});

app.post("/api/v1/task", (req, res) => {
  fakeTasks.push(req.body);
  console.log(req.body);
  res.json({
    status: "Success",
    message: "you made a post call",
  });
});

app.delete("/api/v1/task", (req, res) => {
  res.json({
    message: "you made a delete call",
  });
});

app.use("/", (request, response) => {
  const person = {
    name: "dipak",
    lastname: "paudel",
  };
  response.json({ message: "you have reached to the api of not to do app" });
});

app.listen(PORT, (error) =>
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`)
);
