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
  // Validate the request body
  const { image } = req.body;
  if (!image) {
    res.status(400).json({ message: "Image required" });
    return;
  }

  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(image, { width: 1000, height: 1000, crop: "limit" });
    const imageUrl = result.secure_url;

    // Save the image URL to the database
    await Gallery.create({
      image: imageUrl,
    });

    res.status(201).json({
      message: "Image added successfully",
      imageUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding image" });
  }
});

export default addGallery;
