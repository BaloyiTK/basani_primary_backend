import asyncHandler from "express-async-handler";
import Event from "../../models/eventModel.js";


// Define an async function for getting user details
const getEvents = asyncHandler(async (req, res) => {
 
 
  const events = await Event.find().sort({ date: 1 });

  if (!events  || events.length === 0) {
    res.status(404);
    throw new Error("Events not found, please add!");
  }


 return res.status(200).json({message: "Event succsessfuly retried", event: events})

});

export default getEvents;
