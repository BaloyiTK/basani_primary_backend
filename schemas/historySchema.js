import mongoose from "mongoose";

const historySchema = mongoose.Schema(
  {
    
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default historySchema
