import mongoose from "mongoose";
import statisticSchema from "../schemas/statistics.js";


const Statistics = mongoose.model("Statistics", statisticSchema);

export default Statistics;