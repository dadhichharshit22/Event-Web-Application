// src/routes/auth.ts
import express from "express";
import { login, signup } from "../Controllers/Auth";
import registerEvent from "../Controllers/registerEvent";
import searchEvent from "../Controllers/searchEvent"
import deleteEvent from '../Controllers/deleteEvent'
import updateEvent from "../Controllers/updateEvent"

const router = express.Router();

// complete the route
router.post("/login", login);
router.post("/signup", signup);
router.post("/createevent");
router.put("/updateevent");
router.delete("/deleteevent");
router.get("/");
router.get("/cityname/eventname");
router.get("/eventname");


export default router;

