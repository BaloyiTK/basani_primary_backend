import asyncHandler from "express-async-handler";
import Statistics from "../../models/statisticsModel.js";

const addStats = asyncHandler(async (req, res) => {
  const { numberOfLearners, numberOfTeachers } = req.body;

  // Check if either numberOfLearners or numberOfTeachers is provided
  if (!numberOfLearners && !numberOfTeachers) {
    return res.status(400).send("Either numberOfLearners or numberOfTeachers must be provided.");
  }

  // Find the existing record
  const stats = await Statistics.findOne();

  // Update the existing record with new values
  if (numberOfLearners) {
    stats.numberOfLearners = numberOfLearners;
  }
  if (numberOfTeachers) {
    stats.numberOfTeachers = numberOfTeachers;
  }

  // Save the updated record to the database
  await stats.save();

  res.send("updated");
});

export default addStats;
