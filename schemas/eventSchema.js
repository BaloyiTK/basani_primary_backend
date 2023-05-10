import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    expireDate: {
      type: String,
      required: false,
      default: function() {
        return this.date; // Set the default value to the value of the `date` field
      },
    },
  },
  { timestamps: true }
);

export default eventSchema;

