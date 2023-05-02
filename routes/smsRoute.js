import express from "express";
import sendSMS from "../controllers/contact/sendSMS.js";
import protect from "../middlewares/authMiddleware.js";
import AccountBalance from "../controllers/contact/accountBalance.js";


const router = express.Router();

router.post("/send-sms",protect, sendSMS);
router.get("/balance",protect, AccountBalance);


export default router;
