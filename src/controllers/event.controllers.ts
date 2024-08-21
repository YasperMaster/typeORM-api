import { Request, Response } from "express";

export const createEvent = (req: Request, res: Response) => {
    try {
        res.send("event");
    } catch (error) {
        return res.status(500).json({ message: "Internal server error"});
    }
}