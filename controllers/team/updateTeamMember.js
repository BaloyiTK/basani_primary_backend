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

const updateTeamMember = asyncHandler(async (req, res) => {
 
  const { name, position, photo } = req.body;

  if (!name && !position && !photo) {
    return res
      .status(400)
      .send("Either name, position, or photo must be provided.");
  }

  const memberId = req.params.id;
  const member = await Team.findById(memberId);

  const result = await cloudinary.uploader.upload(photo);

  member.name = name || member.name;
  member.position = position || member.position;
  member.photo = result.secure_url || member.photo;

  await member.save();

  res.send(member);
});
export default updateTeamMember;
