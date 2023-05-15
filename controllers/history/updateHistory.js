import asyncHandler from "express-async-handler";

import History from "../../models/historyModel.js";

// Define an async function for getting user details
const updateHistory = asyncHandler(async (req, res) => {
  const { content } = req.body;

  if (!content) {
    res.status(400);
    throw new Error("Fill all the required fields");
  }
  
const history = await History.findOne()

if (!history) {
    res.status(400);
    throw new Error("Failed to create history. Please check your input and try again.");
  }

history.content = content

await history.save()

  
  return res
    .status(201)
    .json({
      message: "history succsessfuly added",
      history: history,
    });
});

export default updateHistory;
