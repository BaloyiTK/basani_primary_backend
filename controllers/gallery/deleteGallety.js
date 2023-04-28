import asyncHandler from "express-async-handler";
import Gallery from "../../models/galleryModel.js";

// Define an async function for getting user details
const deleteGallety = asyncHandler(async (req, res) => {



  const imageId = req.params.id;

  await Gallery.findByIdAndDelete(imageId);

  return res.status(200).json({ message: "Deleted" });
});

export default deleteGallety;
