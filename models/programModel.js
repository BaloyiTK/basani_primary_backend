import mongoose from "mongoose";
import programSchema from "../schemas/programSchema.js";

const Program = mongoose.model("Program", programSchema);

export default Program;