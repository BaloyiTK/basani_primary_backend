import express from "express";
import updateHistory from "../controllers/history/updateHistory.js";
import getHistory from "../controllers/history/getHistory.js";


const router = express.Router();

router.patch("/history", updateHistory);
router.get("/history", getHistory);
//router.delete("/history/:id", deleteHistory);

export default router