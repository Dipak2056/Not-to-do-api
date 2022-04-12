import mongoose from "mongoose";

const mongoClienet = () => {
  try {
    const mongoUrl = "mongodb://localhost:27017/classA";
    const conn = mongoose.connect(mongoUrl, {});
  } catch (error) {
    console.log(error);
  }
};
