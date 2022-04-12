import mongoose from "mongoose";

const TaskListSchema = new mongoose.Schema({
  task: { type: String, required: true, default: "", min: 3, max: 30 },
  hr: { type: Number, required: true },
});

mongoose.model(Task, TaskListSchema);
