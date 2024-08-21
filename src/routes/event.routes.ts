import { Router } from "express";
import { createEvent } from "../controllers/event.controllers";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { eventSchema } from "../schemas/event.schema";

const router = Router()

router.post("/events", schemaValidation(eventSchema), createEvent)

export default router