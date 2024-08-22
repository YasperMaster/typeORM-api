import { Router } from "express";
import { add, getAll, getOne, update, remove } from "./event.controllers";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { createEventSchema, updateEventSchema } from "../schemas/event.schema";

const router = Router()

router.get("/", getAll)
router.get("/:id", getOne)
router.post("/", schemaValidation(createEventSchema), add)
router.put("/:id", schemaValidation(updateEventSchema), update)
router.delete("/:id", remove)

export default router