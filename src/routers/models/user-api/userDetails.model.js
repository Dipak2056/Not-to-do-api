import userListSchema from "./userDetails.schema.js";
//to read the details of the users
export const returnUserDetail = () => {
  return userListSchema.find();
};
//to read the details of the user
export const returnAUserDetail = (_id) => {
  return userListSchema.findById(_id);
};
//to post the details of the user
export const postUseDetail = (obj) => {
  return userListSchema(obj).save();
};

//TO DELETE the detail of the user
export const deleteUserDetail = (_id) => {
  return userListSchema.findByIdAndDelete(_id);
};

//update user password
export const updateUserPassword = ({ _id, newPassword }) => {
  return userListSchema.findByIdAndUpdate(_id, {
    password: newPassword,
  });
};
