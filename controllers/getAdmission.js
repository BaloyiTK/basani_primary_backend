import asyncHandler from "express-async-handler";
import Admission from "../models/admissionModel.js";

// Define an async function for getting user details
const getAdmission = asyncHandler(async (req, res) => {

  const admission = await Admission.find();

  if (!admission || admission.length === 0) {
    res.status(404);
    throw new Error("admission not found!");
  }

  return res
    .status(200)
    .json({
      message: "admission successfully retrieved",
      admission: admission,
    });
});

export default getAdmission;