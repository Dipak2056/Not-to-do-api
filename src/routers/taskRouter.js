import express from "express";
const router = express.Router();
import {
  insertTask,
  returnTask,
  deleteTask,
} from "./models/tasks/TaskList.model.js";

const fakeTasks = [];
//Api end points
//task api end points
router.get("/", async (req, res) => {
  //replace the tasks with the real ones from databases
  const result = await returnTask();
  res.json({ message: "you made a get call", tasks: result });
});

router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    console.log(result);
    res.json({
      status: "Success",
      message: "you made a post call",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.delete("/:_id", async (req, res) => {
  //we need _id to delete taskfrom db
  try {
    const { _id } = req.params;
    const result = await deleteTask(_id);
    console.log(result);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "The ticket has been deleteed",
        result,
      });
    }

    res.json({
      status: "success",
      message: "delete is successfull",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
