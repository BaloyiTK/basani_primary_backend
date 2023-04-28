import mongoose from "mongoose";
import uniformSchema from "../schemas/uniformSchema.js";

const Uniform = mongoose.model("Uniform", uniformSchema);

export default Uniform;
