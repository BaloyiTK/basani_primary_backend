import asyncHandler from "express-async-handler";
import Contact from "../../models/contactModel.js";

const addContact = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { number, grade } = req.body;

  if (!/^\d{10}$/.test(number)) {

    res.status(400);
    throw new Error( "The contact number should be 10 digits and contain only numeric characters");
  
  }

  // Check if the number already exists in the database
  const existingContact = await Contact.findOne({ number });

  if (existingContact) {
    res.send("contct already added");
  }

  const addedContact = await Contact.create({
    number,
    grade,
  });

  return res.status(200).json({
    message: `${number} contacts added successfully`,
  });
});

export default addContact;
