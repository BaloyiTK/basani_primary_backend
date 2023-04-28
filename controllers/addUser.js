import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// Define an async function for getting user details
const addUser = asyncHandler(async (req, res) => {
  const { username, email, password} = req.body;

  if (!username||!email||!password) {
    res.status(400);
    throw new Error("Fill all the required fields");
  }

   const user = await User.create({
    username, email, password
  });

 return res.status(200).json({message: "User succsessfuly added", user})

});

export default addUser;
