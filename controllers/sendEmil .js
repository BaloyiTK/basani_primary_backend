import asyncHandler from "express-async-handler";
import { sendEmail } from "../utils/sendEmail.js";

// Define an async function for getting user details
const sendEmil = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;


  if (!name || !email || !message) {
    res.send("fill all fields");
  }

  sendEmail(name, email, message);

  return res.status(200).json({message: "Your message was sent successfully"})
});

export default sendEmil;
