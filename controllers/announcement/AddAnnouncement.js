import asyncHandler from "express-async-handler";
import Announcement from "../../models/announcementModel.js";

// Define an async function for getting user details
const AddAnnouncement = asyncHandler(async (req, res) => {
  const { title, date, content } = req.body;

  if ((!title, !date, !content)) {
    res.status(400);
    throw new Error("Fill all the required fields");
  }

  const announcement = await Announcement.create({
    title,
    date,
    content,
  });
  return res
    .status(200)
    .json({ message: "Event succsessfuly added", announcement:announcement});
});

export default AddAnnouncement;
