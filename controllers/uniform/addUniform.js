import asyncHandler from "express-async-handler";
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

const addUniform = asyncHandler(async (req, res) => {
  let result;

  console.log(req.body)

  const { name, description, price, photo } = req.body;

  if (!photo) {
    result =
      "https://teddytennis.com/usa/wp-content/uploads/sites/88/2017/11/placeholder.png";
  } else
    (result = await cloudinary.uploader.upload(photo)),
      (result = result.secure_url);

  if ((!name || !description, !price)) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  }

  const uniform = await Uniform.create({
    name,
    description,
    price,
    photo: result,
  });

  return res.status(200).json({
    message: "uniform item added successfully",
    uniform,
  });
});

export default addUniform;
