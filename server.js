// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
