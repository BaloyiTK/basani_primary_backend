import asyncHandler from "express-async-handler";
import Team from "../../models/teamModel.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import Uniform from "../../models/uniformModel.js";

// Load environment variables from .env file
dotenv.config();

// Configure the Cloudinary SDK with your account details
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const updateUniform = asyncHandler(async (req, res) => {
  const { name, description, price, photo } = req.body;

  if (!name && !description && !price && !photo) {
    return res
      .status(400)
      .send("Either name, description, price, or photo must be provided.");
  }

  const uniformId = req.params.id;
  const uniform = await Uniform.findById(uniformId);
  let result = ""
  
if (photo) {

  result = await cloudinary.uploader.upload(photo);
  
}


  uniform.name = name || uniform.name;
  uniform.price = price || uniform.price;
  uniform.description = description || uniform.description;
  uniform.photo = result.secure_url || uniform.photo;

  await uniform.save();

  res.send(uniform);
});
export default updateUniform;
