import mongoose from "mongoose";
import gallerySchema from "../schemas/gallarySchema.js";

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;