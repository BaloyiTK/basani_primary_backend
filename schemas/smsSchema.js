import mongoose from "mongoose";

const smsSchema = mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default smsSchema;
