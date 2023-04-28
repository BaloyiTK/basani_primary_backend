import asyncHandler from "express-async-handler";
import Uniform from "../../models/uniformModel.js";

// Define an async function for getting user details
const getUniform = asyncHandler(async (req, res) => {

 
   const uniform = await Uniform.find();

    if (!uniform || uniform.length === 0) {
       res.status(404);
        throw new Error("Members not found!");
    }

    return res.status(200).json({uniform})
    
});

export default getUniform;