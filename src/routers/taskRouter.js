import express from "express";
import { insertTask } from "./models/tasks/TaskList.model.js";
const router = express.Router();

const fakeTasks = [];
//Api end points
//task api end points
router.get("/", (req, res) => {
  //replace the tasks with the real ones from databases

  res.json({ message: "you made a get call", tasks: fakeTasks });
});

router.post("/", async (req, res) => {
  fakeTasks.push(req.body);
  const result = await insertTask(req.body);
  console.log(result);
  res.json({
    status: "Success",
    message: "you made a post call",
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "you made a delete call",
  });
});

export default router;
