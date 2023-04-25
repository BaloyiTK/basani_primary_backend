import express from "express";
import AddEvents from "../controllers/addEvents.js";
import deleteEvent from "../controllers/deleteEvent.js";
import getEvents from "../controllers/getEvents.js";


const router = express.Router();


router.get("/event", dashboard);


export default router;
