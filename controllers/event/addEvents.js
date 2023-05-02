import asyncHandler from "express-async-handler";
import Event from "../../models/eventModel.js";
import moment from "moment"


// Define an async function for getting user details
const AddEvents = asyncHandler(async (req, res) => {

  const { title, date, location, description } = req.body;

  if ((!title || !date || !location || !description)) {
    res.status(400);
    throw new Error("Fill all the required fields");
  }

  if (!moment(date, 'YYYY-MM-DD', true).isValid()) {
    res.status(400);
    throw new Error('Invalid date format. Please enter a date in YYYY-MM-DD format.');
  }

   const event = await Event.create({
    title, date, location, description
  });

  if (!event) {
    res.status(400);
    throw new Error("Event not add, please check your inputs");

    
  }

 return res.status(201).json({message: "Event succsessfuly added", event: event})

});

export default AddEvents;
