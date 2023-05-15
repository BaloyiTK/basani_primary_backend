import mongoose from "mongoose";
import historySchema from "../schemas/historySchema.js";

const History = mongoose.model("History", historySchema);

export default History;