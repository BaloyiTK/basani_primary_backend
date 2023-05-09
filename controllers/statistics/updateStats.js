import asyncHandler from "express-async-handler";
import Statistics from "../../models/statisticsModel.js";

const updateStats = asyncHandler(async (req, res) => {
  const { numberOfLearners, numberOfTeachers } = req.body;

  // Find the existing record
  const stats = await Statistics.findOne();

  // Update the existing record with new values
  stats.numberOfLearners = numberOfLearners;
  stats.numberOfTeachers = numberOfTeachers;

  // Save the updated record to the database
  await stats.save();

  res.send("updated");
});

export default updateStats;
