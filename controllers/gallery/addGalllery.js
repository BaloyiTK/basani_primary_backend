import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary";
import Gallery from "../../models/galleryModel.js";

// Configure the Cloudinary SDK with your account details
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const addGallery = asyncHandler(async (req, res) => {
  // Upload image to Cloudinary
const {image} = req.body

console.log(image)
  const result = await cloudinary.uploader.upload(image)
  const imageUrl = result.secure_url;

  // Save the image URL to the database
  await Gallery.create({
    image: imageUrl,
  });

  res.status(201).json({
    message: "Image added successfully",
    imageUrl,
  });
});

export default addGallery;
