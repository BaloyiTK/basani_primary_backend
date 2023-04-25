import express from "express";
import addContact from "../controllers/contact/addContact.js";
import getContact from "../controllers/contact/getContact.js";
import uploadContacts from "../controllers/contact/uploadContacts.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/contact/upload", uploadContacts);
router.post("/contact/add", addContact);
router.get("/contact", getContact);


export default router;