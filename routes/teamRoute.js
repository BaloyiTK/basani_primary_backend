import express from "express";
import addTeamMember from "../controllers/team/addTeamMember.js";
import deleteTeamMembers from "../controllers/team/deleteTeamMembers.js";
import getTeamMembers from "../controllers/team/getTeamMembers.js";
import multer from "multer";
import fs from "fs";
import getPrincipal from "../controllers/team/getPrincipal.js";
import protect from "../middlewares/authMiddleware.js";
import updateTeamMember from "../controllers/team/updateTeamMember.js";

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

router.post("/team", upload.single("image"),protect, addTeamMember);
router.get("/team", getTeamMembers);
router.get("/team/principal", getPrincipal);
router.delete("/team/:id",protect, deleteTeamMembers);
router.patch("/team/:id",protect, updateTeamMember);

export default router;
