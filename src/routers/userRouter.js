import express from "express";
const router = express.Router();
import {
  returnUserDetail,
  postUseDetail,
  deleteUserDetail,
  returnAUserDetail,
  updateUserPassword,
} from "./models/user-api/userDetails.model.js";

//to call the api end point
//this is going to make the request for all the data to make it available for the specific user we use
//id as a parameter and use ternary operator to fetch
router.get("/:_id?", async (req, res) => {
  const { _id } = req.params;

  const result = _id ? await returnAUserDetail(_id) : await returnUserDetail();
  res.json({ message: "you made a get call", userDetail: result });
  console.log(result);
});
//to post the user detail
router.post("/", async (req, res) => {
  console.log(req.body);
  const result = await postUseDetail(req.body);
  res.json({ message: "you have posted new user", newUser: result });
  console.log(result);
});
//to delete the user detail
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await deleteUserDetail(_id);
    console.log(result);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "it has been deleted",
        result,
      });
    }
    res.json({
      status: "delete",
      message: "no user found to be deleted",
    });
  } catch (error) {
    res.json({
      error: "error",
      message: error.message,
    });
  }
});
router.patch("/", async (req, res) => {
  console.log(req.body);
  const result = await updateUserPassword(req.body);
  res.json({ status: "success", result }, { new: true });
});
export default router;
