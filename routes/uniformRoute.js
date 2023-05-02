import express from "express";
import multer from "multer";
import fs from "fs";
import addUniform from "../controllers/uniform/addUniform.js";
import getUniform from "../controllers/uniform/getUniform.js";
import deleteUniform from "../controllers/uniform/deleteUniform.js";
import protect from "../middlewares/authMiddleware.js";

// Set up Multer storage engine
const storage = multer.diskStorage({
  //destination: (req, file, cb) => {
  // cb(null, "uploads/");
  //},
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

router.post("/uniform", upload.single("image"),protect, addUniform);
router.get("/uniform", getUniform);
router.delete("/uniform/:id",protect, deleteUniform);

export default router;
