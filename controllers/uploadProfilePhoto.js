import cloudinary from "cloudinary";
import User from "../models/userModel.js"
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Configure the Cloudinary SDK with your account details
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME ,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadProfilePhoto = async (req, res) => {
  try {
    const userId = req.user_id; // get the user ID from the request object

    const user = await User.findById(userId).select("-password"); // find the user in the database by their ID, and exclude their password from the result

    if (user) { // if the user exists in the database
      if (!req.file) { // if no image file was provided in the request
        return res.status(400).json({ error: "No image file provided" }); // send an error response to the client
      }

      // Upload image to Cloudinary using the Cloudinary SDK
      const result = await cloudinary.uploader.upload(req.file.path);

      // Update the user's photo in the database with the URL of the uploaded image
      const { photo } = user; // get the user's existing photo URL
      user.photo = result.secure_url || photo; // set the user's photo URL to the URL of the uploaded image, or the existing photo URL if no new image was uploaded
      await user.save(); // save the updated user object to the database

      // Send a success response to the client, including the updated user object
      return res.status(200).json({ user });
    } else {
      res.status(400);
      throw new Error("User not found!"); // if the user was not found in the database, send an error response to the client
    }

  } catch (error) { // if an error occurs during the upload process or database update process
    console.error(error);
    res.status(500).json({ error: "Something went wrong" }); // send a generic error response to the client
  }
};

export default uploadProfilePhoto;
