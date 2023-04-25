import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const updateUser = asyncHandler(async (req, res) => {
  const userId = req.user_id; // extract user id from request

  const user = await User.findById(userId).select("-password"); // find user by id, exclude password from response

  if (user) { // check if user exists
    const { username, email, photo } = user; // extract user details

    // update user details with new values or keep the old ones if not provided
    user.username = req.body.username || username;
    user.email = req.body.email || email;
    user.photo = req.body.photo || photo;

    const updatedUser = await user.save(); // save updated user to database

    return res.status(200).json({ updatedUser }); // return updated user details
  } else {
    res.status(400);
    throw new Error("User not found!"); // throw error if user not found
  }
});

export default updateUser;
