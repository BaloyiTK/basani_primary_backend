import asyncHandler from "express-async-handler";
import Event from "../../models/eventModel.js";

// Define an async function for getting user details
const deleteEvent = asyncHandler(async (req, res) => {


  const eventId = req.params.id;

  await Event.findByIdAndDelete(eventId);

  return res.status(200).json({ message: "Deleted" });
});

export default deleteEvent;
