import asyncHandler from "express-async-handler";

import History from "../../models/historyModel.js";

// Define an async function for getting user details
const getHistory = asyncHandler(async (req, res) => {

  const history = await History.find();

  if (!history || history.length === 0) {
    res.status(404);
    throw new Error("History not found!");
  }

  return res
    .status(200)
    .json({
      message: "History successfully retrieved",
      history: history,
    });
});

export default getHistory;