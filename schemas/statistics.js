import mongoose from "mongoose";

const statisticSchema = mongoose.Schema(
  {
    numberOfLearners: {
      type: String,
      required: false,
     
    },
    numberOfTeachers: {
      type: String, // Defines an array of strings
      required: false,
    },
  },
  { timestamps: true }
);
export default statisticSchema;