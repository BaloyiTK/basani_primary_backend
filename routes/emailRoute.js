import express from "express";
import sendEmil from "../controllers/sendEmil .js";
import protect from "../middlewares/authMiddleware.js";



const router = express.Router();

router.post("/email",protect, sendEmil);




export default router;