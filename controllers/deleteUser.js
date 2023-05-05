import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const deleteUser = asyncHandler(async (req, res) => {

  const userId = req.params.id;

  // Check if the event exists before attempting to delete it
  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await User.findByIdAndDelete(userId);

  return res.status(200).json({ message: `User ${user.email} deleted` });
});

export default deleteUser;