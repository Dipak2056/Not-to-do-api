import mongoose from "mongoose";

const mongoClient = () => {
  try {
    console.log(process.env.MONGO_URL);
    const mongoUrl = "mongodb://localhost:27017/classA";
    const conn = mongoose.connect(mongoUrl);

    if (conn) {
      console.log("MongoDB is connected");
    }
  } catch (error) {
    console.log(error);
  }
};
export default mongoClient;
