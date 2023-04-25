import asyncHandler from "express-async-handler";
import Team from "../../models/teamModel.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Configure the Cloudinary SDK with your account details
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Define an async function for adding a team member
const addTeamMember = asyncHandler(async (req, res) => {


  const { name, position, photo } = req.body;

  console.log(photo);

  if (!photo) {
    // if no image file was provided in the request
    return res.status(400).json({ error: "No image file provided" }); // send an error response to the client
  }

  if (!name || !position) {
    res.status(400);
    throw new Error("Please fill in all the required fields")
  }

  // Upload the photo to Cloudinary
  const result = await cloudinary.uploader.upload(photo);
  const member = await Team.create({
    name,
    position,
    photo: result.secure_url,
  });

  return res.status(200).json({
    message: "Team member added successfully",
    member,
  });
});

export default addTeamMember;
