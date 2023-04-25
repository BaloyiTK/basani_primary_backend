import asyncHandler from "express-async-handler";
import Contact from "../../models/contactModel.js";

const uploadContacts = asyncHandler(async (req, res) => {
  let counter = 0;
  let total = req.body.length;
  let notAdded = 0;

  for (const contact of req.body) {
    const { number, grade } = contact;

    // Check if the number already exists in the database
    const existingContact = await Contact.findOne({ number });

    if (existingContact) {
      notAdded++; // Increment the notAdded counter for skipped contacts
      continue; // Skip this contact if it already exists
    }

    if (number.length !== 10) {
      notAdded++; // Increment the notAdded counter for skipped contacts
      continue; // Skip this contact if it doesn't have 10 digits
    }

    const addedContact = await Contact.create({
      number,
      grade,
    });

    if (addedContact) {
      counter++; // Increment the counter for successful additions
    } else {
      notAdded++; // Increment the notAdded counter for failed additions
    }
  }

  if (counter === 0) {
    res.status(400);
    throw new Error(`The contact number should be 10 digits and contain only numeric characters`);
    
  }

  return res
    .status(200)
    .json({ 
      message: `${counter} contacts added successfully`,
      total: total,
      notAdded: notAdded
    });
});

export default uploadContacts;
