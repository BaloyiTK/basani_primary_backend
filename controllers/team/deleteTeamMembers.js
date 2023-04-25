import asyncHandler from "express-async-handler";
import Team from "../../models/teamModel.js";

// Define an async function for getting user details
const deleteTeamMembers = asyncHandler(async (req, res) => {

  console.log(req.params.id);

  const memberId = req.params.id;

  await Team.findByIdAndDelete(memberId);

  return res.status(200).json({ message: "Deleted" });
});

export default deleteTeamMembers;
