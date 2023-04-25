import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";
import bcrypt from "bcrypt";

// Define an async function for handling change password requests
const changePassword = asyncHandler(async (req, res) => {
  
  // Extract the user ID from the request object
  const userId = req.user_id;

  // Find the user with the specified ID in the database
  const user = await User.findById(userId);

  if (user) {
    // Extract the old password, new password, and confirm password from the request body
    const { oldpassword, password, confirmPassword } = req.body;

    // Check if all the required fields are present in the request body
    if (!oldpassword || !password || !confirmPassword) {
      res.status(400);
      throw new Error("Please fill all the required fields");
    }

    // Check if the new password and confirm password match
    if (password !== confirmPassword) {
      res.status(400);
      throw new Error("Password and Confirm Password do not match");
    }


    // Check if the old password matches the user's current password
    const passwordMatch = await bcrypt.compare(oldpassword, user.password);

    if (passwordMatch) {
      // If the old password matches, update the user's password and save it to the database
      user.password = password;
      await user.save();
      return res
        .status(200)
        .json({ message: "Your password has been successfully updated." });
    } else {
      // If the old password does not match, return an error message
      res.status(400);
      throw new Error(
        "The old password you entered is incorrect. Please try again."
      );
    }
  } else {
    // If the user is not found, return an error message
    res.status(400);
    throw new Error("User not found!");
  }
});

// Export the changePassword function for use in other files
export default changePassword;
