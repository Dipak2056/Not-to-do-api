import mongoose from "mongoose";

const TaskListSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    default: "",
    minlength: [3, "cannot be less than 3"],
    maxlength: 30,
  },
  hr: { type: Number, required: true },
  
});

const TaskList = mongoose.model("Task", TaskListSchema);
export default TaskList;
