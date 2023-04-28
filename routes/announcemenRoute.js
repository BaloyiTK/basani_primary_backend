import express from "express";
import AddAnnouncement from "../controllers/announcement/AddAnnouncement.js";
import getAnnouncement from "../controllers/announcement/getAnnouncement.js";
import deleteAnnouncement from "../controllers/announcement/deleteAnnouncement.js";


const router = express.Router();

router.post("/announcement", AddAnnouncement);
router.get("/announcement", getAnnouncement);
router.delete("/announcement/:id", deleteAnnouncement);

export default router