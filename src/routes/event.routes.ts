import { Router } from "express";
import { createEvent } from "../controllers/event.controllers";

const router = Router()

router.post("/events", createEvent)

export default router