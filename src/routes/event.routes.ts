import { Router } from "express";
import { createEvent } from "../controllers/event.controllers";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";

const router = Router()

router.post("/events", createEvent)

export default router