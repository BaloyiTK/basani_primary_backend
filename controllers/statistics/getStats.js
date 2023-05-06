import asyncHandler from "express-async-handler";
import Statistics from "../../models/statisticsModel.js";


const getStats = asyncHandler(async (req, res) => {

 
    const statistics = await Statistics.find()


    res.send(statistics)



})

export default getStats