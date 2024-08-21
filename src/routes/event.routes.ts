import { Router } from "express";
import { createEvent, updateEvent } from "../controllers/event.controllers";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { createEventSchema, updateEventSchema } from "../schemas/event.schema";

const router = Router()

router.post("/events", schemaValidation(createEventSchema), createEvent)
router.put("/events/:id", schemaValidation(updateEventSchema), updateEvent)

export default router