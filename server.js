const express = require("express");
const app = express();
const PORT = 8000;

//Api end points
app.get("/api/v1/", (req, res) => {
  res.json({
    message: "welcome to the api",
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
