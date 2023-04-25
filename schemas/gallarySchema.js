import mongoose from "mongoose";

const gallerySchema = mongoose.Schema(
  {
 
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default gallerySchema;
