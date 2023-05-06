import asyncHandler from "express-async-handler";
import Statistics from "../../models/statisticsModel.js";


const addStats = asyncHandler(async (req, res) => {

  const { numberOfLearners,numberOfTeachers} = req.body

  

  console.log(numberOfLearners +"  "+ numberOfTeachers)
  const stats = await Statistics.create({
    numberOfLearners,numberOfTeachers
  });


  res.send("created")



})

export default addStats