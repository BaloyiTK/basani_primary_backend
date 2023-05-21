import asyncHandler from "express-async-handler";
import Program from "../../models/programModel.js";

// Define an async function for getting user details
const deleteProgram = asyncHandler(async (req, res) => {

  const programId = req.params.id;

  await Program.findByIdAndDelete(programId);
  
  return res.status(200).json({ message: "Program deleted Successfully" });

});

export default deleteProgram;
