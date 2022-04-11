import express from "express";
const router = express.Router();

const fakeTasks = [];
//Api end points
//task api end points
router.get("/api/v1/task", (req, res) => {
  //replace the tasks with the real ones from databases

  res.json({ message: "you made a get call", tasks: fakeTasks });
});

router.post("/api/v1/task", (req, res) => {
  fakeTasks.push(req.body);
  console.log(req.body);
  res.json({
    status: "Success",
    message: "you made a post call",
  });
});

router.delete("/api/v1/task", (req, res) => {
  res.json({
    message: "you made a delete call",
  });
});
