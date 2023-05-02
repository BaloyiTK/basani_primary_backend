import asyncHandler from "express-async-handler";
import Announcement from "../../models/announcementModel.js";
import moment from "moment"

// Define an async function for getting user details
const AddAnnouncement = asyncHandler(async (req, res) => {
  const { title, date, content } = req.body;

  if (!title || !date || !content) {
    res.status(400);
    throw new Error("Fill all the required fields");
  }
  
  // Check that date is in valid format
if (!moment(date, 'YYYY-MM-DD', true).isValid()) {
  res.status(400);
  throw new Error('Invalid date format. Please enter a date in YYYY-MM-DD format.');
}

  const announcement = await Announcement.create({
    title,
    date,
    content,
  });

  if (!announcement) {
    res.status(400);
    throw new Error("Failed to create announcement. Please check your input and try again.");
  }

  return res
    .status(201)
    .json({
      message: "Announcement succsessfuly added",
      announcement: announcement,
    });
});

export default AddAnnouncement;
