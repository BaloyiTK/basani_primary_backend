import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";
import { generateToken } from "../../generateToken.js";
import { passwordResetEmail } from "./passwordResetEmail.js";

// Define an async function for handling forgot password requests
const forgotPassword = async (req, res) => {

  try {

    
  const { email } = req.body;



  const user = await User.findOne({ email });

  console.log(user)

  if (!user) {
    res.status(401);
    throw new Error("User not found. Please check your email or contact supprt!");
  }

  // Generate a token for resetting the password
  const token = generateToken(user._id);

  // Set the type of the email to "forgot" and send the password reset email to the user
  const type = "forgot";
  passwordResetEmail(token, user, type);

  // Return a success response with a message indicating that the password reset link has been sent
  return res.status(200).json({
    message: "Password reset link has been sent to your email. Please check your inbox and follow the instructions to reset your password within an hour.",
  });
    
  } catch (error) {

    return res.status(500).json({message: error.message})
    
  }
  
 
};

// Export the forgotPassword function for use in other files
export default forgotPassword;

