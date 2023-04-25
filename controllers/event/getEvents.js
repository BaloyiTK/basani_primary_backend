import asyncHandler from "express-async-handler";
import Event from "../../models/eventModel.js";


// Define an async function for getting user details
const getEvents = asyncHandler(async (req, res) => {
 
 
  const events = await Event.find().sort({ date: 1 });

  if (!events) {
    res.status(400);
    throw new Error("no evens found");
  }


 return res.status(200).json({message: "Event succsessfuly retried", event: events})

});

export default getEvents;
