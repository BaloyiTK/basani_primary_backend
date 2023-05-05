import asyncHandler from "express-async-handler";
import Team from "../../models/teamModel.js";

// Define an async function for getting user details
const deleteTeamMembers = asyncHandler(async (req, res) => {

  const memberId = req.params.id;

  await Team.findByIdAndDelete(memberId);

  return res.status(200).json({ message: "Team member successfully deleted " });
});

export default deleteTeamMembers;
