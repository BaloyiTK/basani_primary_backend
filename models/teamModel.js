import mongoose from "mongoose";
import teamSchema from "../schemas/teamSchema.js";

const Team = mongoose.model("Team", teamSchema);

export default Team;
