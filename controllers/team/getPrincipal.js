import asyncHandler from "express-async-handler";
import Team from "../../models/teamModel.js";

// Define an async function for getting user details
const getPrincipal = asyncHandler(async (req, res) => {
  const regex = new RegExp("principal", "i");
  const principal = await Team.findOne({ position: regex });

  if (!principal) {
    res.status(400);
    throw new Error("Members not found!");
  }

  res.send(principal);
});

export default getPrincipal;
