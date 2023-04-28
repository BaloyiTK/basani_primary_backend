import asyncHandler from "express-async-handler";
import Program from "../../models/programModel.js";

// Define an async function for getting user details
const getPrograms = asyncHandler(async (req,res) => {
  //const members = await Team.find({ position: { $not: { $regex: /principal/i } } });
  const programs = await Program.find();

  if (!programs || programs.length === 0) {
    res.status(404);
    throw new Error("Programs not found!");
  }

  return res.status(200).json({programs})
});

export default getPrograms;
