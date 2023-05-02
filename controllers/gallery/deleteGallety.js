import asyncHandler from "express-async-handler";
import Gallery from "../../models/galleryModel.js";

// Define an async function for getting user details
const deleteGallety = asyncHandler(async (req, res) => {



  const imageId = req.params.id;

  const deletedImage =  await Gallery.findByIdAndDelete(imageId);

  if (!deletedImage) {

    res.status(404);
    throw new Error("Image not found!");

  }

  return res.status(200).json({ message: "Image deleted successfully" });
});

export default deleteGallety;
