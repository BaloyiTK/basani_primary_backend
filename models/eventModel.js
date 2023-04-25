import mongoose from "mongoose";
import eventSchema from "../schemas/eventSchema.js";


const Event = mongoose.model("Event", eventSchema);

export default Event;