import mongoose from "mongoose";
import announcementSchema from "../schemas/announcementSchema.js";

const Announcement = mongoose.model("Announcement", announcementSchema);

export default Announcement;
