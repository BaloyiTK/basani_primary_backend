import express from "express";
import getContact from "../controllers/contact/getContact.js";
import sendEmil from "../controllers/sendEmil .js";



const router = express.Router();

router.post("/email", sendEmil);

router.get("/contact", getContact);


export default router;