import asyncHandler from "express-async-handler";
import Announcement from "../../models/announcementModel.js";

// Define an async function for getting user details
const deleteAnnouncement = asyncHandler(async (req, res) => {
  const announcementId = req.params.id;

  const deletedAnnouncement = await Announcement.findByIdAndDelete(
    announcementId
  );

  if (!deletedAnnouncement) {
    res.status(404);
    throw new Error("Announcement not found!");
  }

  return res.status(200).json({ message: "Announcement Deleted" });
});

export default deleteAnnouncement;
