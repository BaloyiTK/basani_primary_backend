import asyncHandler from "express-async-handler";
import Announcement from "../../models/announcementModel.js";

// Define an async function for getting user details
const getAnnouncement = asyncHandler(async (req, res) => {
  const announcements = await Announcement.find().sort({ date: 1 });

  if (!announcements || announcements.length === 0) {
    res.status(404);
    throw new Error("Announcements not found!");
  }

  return res
    .status(200)
    .json({
      message: "Announcements successfully retrieved",
      announcements: announcements,
    });
});

export default getAnnouncement;
