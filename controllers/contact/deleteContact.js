import asyncHandler from "express-async-handler";
import Contact from "../../models/contactModel.js";

// Define an async function for getting user details
const deleteContact = asyncHandler(async (req, res) => {

  const contactId = req.params.id;

  await Contact.findByIdAndDelete(contactId);

  return res.status(200).json({ message: "Deleted" });
});

export default deleteContact;