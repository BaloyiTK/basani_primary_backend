import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// Define an async function for getting user details
const getUsers = asyncHandler(async (req, res) => {
  
  // Extract the user ID from the request object
  const userId = req.user_id;
  
  // Find the user with the specified ID in the database
  const users = await User.find()

  if (!users) { 
	
	res.status(400);
    throw new Error("user not found!");
  }

  return res.status(200).json({ users})
   
});

// Export the getUser function for use in other files
export default getUsers;
