import asyncHandler from "express-async-handler";

import Gallery from "../../models/galleryModel.js";


const getGallery = asyncHandler(async (req, res) => {

   const gallery =  await Gallery.find()

   return res.status(200).json({gallery})


})

export default getGallery