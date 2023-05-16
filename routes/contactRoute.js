import express from "express";
import addContact from "../controllers/contact/addContact.js";
import getContact from "../controllers/contact/getContact.js";
import uploadContacts from "../controllers/contact/uploadContacts.js";
import protect from "../middlewares/authMiddleware.js";
import deleteContact from "../controllers/contact/deleteContact.js";

const router = express.Router();

router.post("/contact/upload",protect, uploadContacts);
router.post("/contact/add",protect, addContact);
router.get("/contact",protect, getContact);
router.delete("/contact/:id",protect, deleteContact);


export default router;