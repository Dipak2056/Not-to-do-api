import userListSchema from "./userDetails.schema.js";
//to read the details of the user
export const returnUserDetail = () => {
  return userListSchema.find();
};
//to post the details of the user
export const postUseDetail = (obj) => {
  return userListSchema(obj).save();
};

//TO DELETE the detail of the user
export const deleteUserDetail = (_id) => {
  return userListSchema.findByIdAndDelete(_id);
};
