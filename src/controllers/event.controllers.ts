import { eventSchema } from "../schemas/event.schema";
import { ZodError } from "zod";
import { Request, Response } from "express";

export const createEvent = (req: Request, res: Response) => {
    try {
        eventSchema.parse(req.body)
        res.send("event");
    } catch (error) {
        if (error instanceof ZodError) {
            return res
            .status(400)
            .json(error.issues.map((issue) => ({ message: issue.message})));
        }
        return res.status(500).json({ message: "Internal server error"});
    }
}