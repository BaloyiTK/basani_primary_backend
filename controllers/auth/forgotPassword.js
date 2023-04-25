import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";

import { generateToken } from "../../generateToken.js";
import { sendEmail } from "../../utils/sendEmail.js";

// Define an async function for handling forgot password requests
const forgotPassword = asyncHandler(async (req, res) => {
  
  // Extract the email from the request body
  const { email } = req.body;

  // Find the user with the specified email in the database
  const user = await User.findOne({ email });

  // If the user is not found, throw an error and set the response status to 401 (Unauthorized)
  if (!user) {
    res.status(401);
    throw new Error("User not found. Please sign up!");
  }

  // Generate a token for resetting the password
  const token = generateToken(user._id);

  // Set the type of the email to "forgot" and send the password reset email to the user
  const type = "forgot";
  sendEmail(token, user, type);

  // Return a success response with a message indicating that the password reset link has been sent
  return res.status(200).json({
    message: "Password reset link has been sent to your email. Please check your inbox and follow the instructions to reset your password within an hour.",
  });
});

// Export the forgotPassword function for use in other files
export default forgotPassword;

