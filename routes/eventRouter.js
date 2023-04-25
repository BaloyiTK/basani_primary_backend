import express from "express";
import AddEvents from "../controllers/event/addEvents.js";
import deleteEvent from "../controllers/event/deleteEvent.js";
import getEvents from "../controllers/event/getEvents.js";


const router = express.Router();

router.post("/event", AddEvents);
router.get("/event", getEvents);
router.delete("/event/:id", deleteEvent);

export default router;
