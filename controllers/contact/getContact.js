import asyncHandler from "express-async-handler";
import Contact from "../../models/contactModel.js";

// async handler to handle the login functionality
const getContact = asyncHandler(async (req, res) => {

    const contact = await Contact.find()

    res.send(contact)
})

export default getContact