import asyncHandler from "express-async-handler";
import Announcement from "../../models/announcementModel.js";

// Define an async function for getting user details
const deleteAnnouncement = asyncHandler(async (req, res) => {

  const announcementId = req.params.id;

  await Announcement.findByIdAndDelete(announcementId);

  return res.status(200).json({ message: "Deleted" });
});

export default deleteAnnouncement;
