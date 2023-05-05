import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import Program from "../../models/programModel.js";

// Load environment variables from .env file
dotenv.config();

// Configure the Cloudinary SDK with your account details
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const addProgram = asyncHandler(async (req, res) => {
  let result;

  const { title, description, photo } = req.body;

  if (!photo) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  } else
    (result = await cloudinary.uploader.upload(photo)),
      (result = result.secure_url);

  if (!title || !description) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  }

  const program = await Program.create({
    title,
    description,
    photo: result,
  });

  return res.status(200).json({
    message: "Program added successfully",
    program,
  });
});

export default addProgram;