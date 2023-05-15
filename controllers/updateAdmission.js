import asyncHandler from "express-async-handler";
import Admission from "../models/admissionModel.js";

// Define an async function for getting user details
const updateAdmission = asyncHandler(async (req, res) => {
  const { content } = req.body;

  if (!content) {
    res.status(400);
    throw new Error("Fill all the required fields");
  }

  const admission = await Admission.findOne();

  if (!admission) {
    res.status(400);
    throw new Error(
      "Failed to update admission. Please check your input and try again."
    );
  }

  admission.content = content;

  await admission.save();

  return res.status(200).json({
    message: "admission succsessfuly added",
    admission: admission,
  });
});

export default updateAdmission;
