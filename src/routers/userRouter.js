import express from "express";
const router = express.Router();
import {
  returnUserDetail,
  postUseDetail,
  deleteUserDetail,
} from "./models/user-api/userDetails.model.js";

//to call the api end point
router.get("/", async (req, res) => {
  const result = await returnUserDetail();
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
      message: "deleted",
    });
  } catch (error) {
    res.json({
      error: "error",
      message: error.message,
    });
  }
});
export default router;
