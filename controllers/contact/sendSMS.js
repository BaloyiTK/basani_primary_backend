import asyncHandler from "express-async-handler";
import axios from "axios";
import Contact from "../../models/contactModel.js";

const sendSMS = asyncHandler(async (req, res) => {
  const { message, selectedGrades, sendToAll } = req.body;

  const contacts = await Contact.find();

  if (!contacts || contacts.length === 0) {
    return res.status(404).json({
      message:
        "No contacts found in the database, add contact or contact system admin.",
    });
  }

  const filteredContacts = sendToAll
    ? contacts
    : contacts.filter((contact) =>
        selectedGrades.some((grade) => contact.grades.includes(grade))
      );

  try {
    await Promise.all(
      filteredContacts.map((contact) =>
        axios.post(
          "https://rest.smsportal.com/v1/BulkMessages",
          {
            messages: [
              {
                content: message,
                destination: contact.number,
              },
            ],
            sendAt: null,
          },
          {
            headers: {
              Authorization: `Basic ${Buffer.from(
                `${process.env.SMS_CLIENT_ID}:${process.env.SMS_API_SECRET}`
              ).toString("base64")}`,
              "Content-Type": "application/json",
            },
          }
        )
      )
    );

    return res.status(200).json({
      message: "SMS messages were sent successfully.",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Failed to send SMS messages.",
    });
  }
});

export default sendSMS;
