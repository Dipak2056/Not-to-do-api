const fakeTasks = [];
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
