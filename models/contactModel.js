import mongoose from "mongoose";
import contactSchema from "../schemas/contactSchema.js";

const Contact = mongoose.model("Contact", contactSchema)

export default Contact;
