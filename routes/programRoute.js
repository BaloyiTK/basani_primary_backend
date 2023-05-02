import express from "express";
import multer from "multer";
import fs from "fs";
import addProgram from "../controllers/program/addProgram.js";
import deleteProgram from "../controllers/program/deleteProgram.js";
import getPrograms from "../controllers/program/getPrograms.js";
import protect from "../middlewares/authMiddleware.js";


// Set up Multer storage engine
const storage = multer.diskStorage({
 
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

// Set up Multer upload middleware
const upload = multer({ storage: storage });

// Create the uploads directory if it does not exist
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

const router = express.Router();

router.post("/program", upload.single("image"),protect, addProgram);
router.get("/program", getPrograms);
router.delete("/program/:id",protect, deleteProgram);

export default router;
