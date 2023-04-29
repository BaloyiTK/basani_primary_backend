
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
                `${"62f9f22f-7adf-4a76-8989-19ce8489d696"}:${"GMDpGQ+12Vxkg/GqXciQCah3Q7PQ+CMl"}`
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
    return res.status(500).json({
      message: "Failed to send SMS messages.",
    });
  }
});

export default sendSMS;







// import asyncHandler from "express-async-handler";
// import axios from "axios";
// import Contact from "../../models/contactModel.js";

// // async handler to handle the login functionality
// const sendSMS = asyncHandler(async (req, res) => {
//   const { message, selectedGrades, sendToAll } = req.body;

//   const contact = await Contact.find();

//   if (!contact || contact.length == 0) {
//     res.status(404);
//     throw new Error(
//       "No contacts found in the database, add contact or contact system admin."
//     );
//   }

//   if (sendToAll) {
//     for (const cont of contact) {
//       await axios
//         .post(
//           "https://rest.smsportal.com/v1/BulkMessages",
//           {
//             messages: [
//               {
//                 content: message,
//                 destination: cont.number, // send SMS to current contact's number
//               },
//             ],
//             sendAt: null,
//           },
//           {
//             headers: {
//               Authorization: `Basic ${Buffer.from(
//                 `${"62f9f22f-7adf-4a76-8989-19ce8489d696"}:${"GMDpGQ+12Vxkg/GqXciQCah3Q7PQ+CMl"}`
//               ).toString("base64")}`,
//               "Content-Type": "application/json",
//             },
//           }
//         )
//         .then(() => {
//           return res
//             .status(200)
//             .json({ message: "SMS messages were sent successfully." });
//         });
//     }
//   } else {
//     console.log(selectedGrades);

//     for (const cont of contact) {
//       const { number, grades } = cont;
//       for (const grade of grades) {
//         console.log(grade);

//         if (selectedGrades.includes(grade)) {
//           await axios
//             .post(
//               "https://rest.smsportal.com/v1/BulkMessages",
//               {
//                 messages: [
//                   {
//                     content: message,
//                     destination: number, // send SMS to current contact's number
//                   },
//                 ],
//                 sendAt: null,
//               },
//               {
//                 headers: {
//                   Authorization: `Basic ${Buffer.from(
//                     `${"62f9f22f-7adf-4a76-8989-19ce8489d696"}:${"GMDpGQ+12Vxkg/GqXciQCah3Q7PQ+CMl"}`
//                   ).toString("base64")}`,
//                   "Content-Type": "application/json",
//                 },
//               }
//             )
//             .then(() => {
//               return res
//                 .status(200)
//                 .json({ message: "SMS messages were sent successfully." });
//             });
//         }
//       }
//     }
//   }
// });
// export default sendSMS;
