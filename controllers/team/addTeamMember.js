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

const addTeamMember = asyncHandler(async (req, res) => {
  let result;

  const { name, position, photo } = req.body;

  if (!photo) {
    result =
      "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg";
  } else
    (result = await cloudinary.uploader.upload(photo)),
      (result = result.secure_url);

  if (!name || !position) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  }

  const member = await Team.create({
    name,
    position,
    photo: result,
  });

  return res.status(200).json({
    message: "Team member added successfully",
    member,
  });
});

export default addTeamMember;