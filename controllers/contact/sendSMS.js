import asyncHandler from "express-async-handler";
import axios from "axios";
import Contact from "../../models/contactModel.js";

// async handler to handle the login functionality
const sendSMS = asyncHandler(async (req, res) => {
  const { message, selectedGrades, sendToAll } = req.body;

  const contact = await Contact.find();
  console.log(contact);

  if (!contact) {
    res.status(404);
    throw new Error(
      "No contacts found in the database, add contact or contact system admin."
    );
  }

  for (const cont of contact) {
    await axios
      .post(
        "https://rest.smsportal.com/v1/BulkMessages",
        {
          messages: [
            {
              content: message,
              destination: cont.number, // send SMS to current contact's number
            },
          ],
          sendAt: null,
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${"62f9f22f-7adf-4a76-8989-19ce8489d696"}:${"GMDpGQ+12Vxkg/GqXciQCah3Q7PQ+CMl"}`
            ).toString("base64")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
  
        return res.status(200).json({message:"SMS messages were sent successfully."})
      });
  }
});
export default sendSMS;
