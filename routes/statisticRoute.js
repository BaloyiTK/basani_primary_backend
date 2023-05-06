import express from "express";
import addStats from "../controllers/statistics/addStats.js";
import getStats from "../controllers/statistics/getStats.js";


const router = express.Router();

router.post("/statistics", addStats);
router.get("/statistics", getStats);
//router.delete("/stats/:id", deleteStats);

export default router