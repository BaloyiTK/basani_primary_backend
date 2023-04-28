import asyncHandler from "express-async-handler";

import Uniform from "../../models/uniformModel.js";

// Define an async function for getting user details
const deleteUniform = asyncHandler(async (req, res) => {


  const uniformId = req.params.id;

  await Uniform.findByIdAndDelete(uniformId);

  return res.status(200).json({ message: "Deleted" });
});

export default deleteUniform;
