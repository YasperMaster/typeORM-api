import { Request, Response } from "express";
import { createEventType, updateEventBodyType, updateEventParamsType, updateEventQueryType } from "../schemas/event.schema";

export const createEvent = (req: Request<unknown, unknown, createEventType>, res: Response) => {
    const { name, generalTickets, description, dateTime } = req.body
    res.send("Event created");
}

export const updateEvent = (req: Request<updateEventParamsType, unknown, updateEventBodyType, updateEventQueryType>, res: Response) => {

    const { id } = req.params
    const { name, generalTickets, description, dateTime } = req.body
    const { title } = req.query
    res.send("Event updated");
}