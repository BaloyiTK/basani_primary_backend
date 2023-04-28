import asyncHandler from "express-async-handler";
import Announcement from "../../models/announcementModel.js";

// Define an async function for getting user details
const getAnnouncement = asyncHandler(async (req, res) => {
  console.log("annnnn")
  const announcements = await Announcement.find().sort({ date: 1 });

  if (!announcements) {
    res.status(400);
    throw new Error("no evens found");
  }

  return res
    .status(200)
    .json({ message: "Event succsessfuly retried", announcements: announcements });
});

export default getAnnouncement;
