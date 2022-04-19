import mongoose from "mongoose";
const UserListSchema = new mongoose.Schema({
  username: {
    type: String,
    default: "",
    required: true,
    min: [3, "way too short"],
  },
  email: {
    type: String,
    required: true,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
});

const userDetail = mongoose.model("User", UserListSchema);
export default userDetail;
