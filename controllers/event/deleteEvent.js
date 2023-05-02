import asyncHandler from "express-async-handler";
import Event from "../../models/eventModel.js";

const deleteEvent = asyncHandler(async (req, res) => {
  const eventId = req.params.id;

  // Check if the event exists before attempting to delete it
  const event = await Event.findById(eventId);
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }

  await Event.findByIdAndDelete(eventId);

  return res.status(200).json({ message: `Event with ID ${eventId} deleted` });
});

export default deleteEvent;
