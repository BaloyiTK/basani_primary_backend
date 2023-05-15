import express from "express";
import updateAdmission from "../controllers/updateAdmission.js";
import getAdmission from "../controllers/getAdmission.js";


const router = express.Router();

router.patch("/admission", updateAdmission);
router.get("/admission", getAdmission);
//router.delete("/history/:id", deleteHistory);

export default router