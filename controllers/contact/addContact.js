import asyncHandler from "express-async-handler";
import Contact from "../../models/contactModel.js";

const addContact = asyncHandler(async (req, res) => {
  const { number, grades } = req.body;

  if (!number || !grades) {
    res.status(400);
    throw new Error(
      "Fill all the reqired fields"
    );
  }
    

  if (!/^\d{10}$/.test(number)) {
    res.status(400);
    throw new Error(
      "The contact number should be 10 digits and contain only numeric characters"
    );
  }

  // Check if the number already exists in the database
  const existingContact = await Contact.findOne({ number })

  if (existingContact) {
    res.status(400);
    throw new Error(
      "The contact number already exist, please add different number"
    );
  }

  await Contact.create({
    number,
    grades,
  });

  return res.status(200).json({
    message: `${number} contacts added successfully`,
  });
});

export default addContact
