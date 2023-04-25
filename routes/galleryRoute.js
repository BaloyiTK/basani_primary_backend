import express from "express";
import multer from "multer";
import fs from "fs";
import addGallery from "../controllers/gallery/addGalllery.js";
import getGallery from "../controllers/gallery/getGallery.js";

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

router.post("/gallery", upload.single("image"), addGallery);
router.get("/gallery", getGallery);
// router.delete("/gallery/:id", deleteTeamMembers);

export default router;
