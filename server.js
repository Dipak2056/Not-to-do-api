import "dotenv/config";

// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

//to connect to mongo db
import mongoClient from "./src/routers/config/db.js";
mongoClient();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//load the modules
import taskRouter from "./src/routers/taskRouter.js";
//loading the username modules
import userRouter from "./src/routers/userRouter.js";

app.use("/api/v1/task", taskRouter);
//to use the userRouter
app.use("/api/v1/user", userRouter);

app.use("/", (request, response) => {
  // const person = {
  //   name: "dipak",
  //   lastname: "paudel",
  // };
  response.json({ message: "you have reached to the api of not to do app" });
});

app.listen(PORT, (error) =>
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`)
);
