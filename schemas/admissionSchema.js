import mongoose from "mongoose";

const admissionSchema = mongoose.Schema(
  {
    
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default admissionSchema
