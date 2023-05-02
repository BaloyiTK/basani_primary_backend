import express from "express";
import AddEvents from "../controllers/event/addEvents.js";
import deleteEvent from "../controllers/event/deleteEvent.js";
import getEvents from "../controllers/event/getEvents.js";
import protect from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post("/event",protect, AddEvents);
router.get("/event", getEvents);
router.delete("/event/:id",protect, deleteEvent);

export default router;
