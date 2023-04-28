import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
      unique: true,
    },
    grades: {
      type: [String], // Defines an array of strings
      required: true,
    },
  },
  { timestamps: true }
);
export default contactSchema;
