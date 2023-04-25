import asyncHandler from "express-async-handler";
import Event from "../../models/eventModel.js";


// Define an async function for getting user details
const AddEvents = asyncHandler(async (req, res) => {
  const { title, date, location, description } = req.body;

  if ((!title, !date, !location, !description)) {
    res.status(400);
    throw new Error("Fill all the required fields");
  }

   const event = await Event.create({
    title, date, location, description
  });

 return res.status(200).json({message: "Event succsessfuly added", event: event})

});

export default AddEvents;
