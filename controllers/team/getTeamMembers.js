import asyncHandler from "express-async-handler";
import Team from "../../models/teamModel.js";

// Define an async function for getting user details
const getTeamMembers = asyncHandler(async (req, res) => {

   //const members = await Team.find({ position: { $not: { $regex: /principal/i } } });
   const members = await Team.find();

    if (!members || members.length === 0) {
        res.status(404);
        throw new Error("Members not found!");
    }

    res.send(members);
    
});

export default getTeamMembers;
