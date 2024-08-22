import { Event } from "./event.entity";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const add =  async (req: Request, res: Response) => {
    const { name, generalTickets, description, dateTime } = req.body
    
    try {
        const event = new Event();
        event.name = name;
        event.generalTickets = generalTickets;
        event.description = description;
        event.dateTime = dateTime;
        
        await event.save();

        res.send("Event created");

        const token: string = jwt.sign(
            { id: event.id },
            process.env.SECRET_KEY || 'privatemessage',
            { expiresIn: '1h' }
        );
    
        res.header('auth-token', token).json({ token, eventId: event.id, name: event.name });

    } 
    catch (error: any) {
        return res.status(500).json({ message: error.message || 'Internal server error' });
    } 
}


export const getAll = async (req: Request, res: Response) => {
    try {
      const events = await Event.find()
      return res.status(200).json(events)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  export const getOne = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const event = await Event.findOneBy({ id: parseInt(id) });
  
      if (!event) return res.status(404).json({ message: "Event not found" });
  
      return res.json(event);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const update = async (req: Request, res: Response) => {
    try {
      const { name, generalTickets, description, dateTime } = req.body
      const event = await Event.findOneBy({ id: parseInt(req.params.id) })
  
      if (!event) return res.status(404).json({ message: "Event does not exist" })
  
        event.name = name
        event.generalTickets = generalTickets
        event.description = description
        event.dateTime = dateTime
  
      await event.save()
  
      return res.status(200).json({ message: "Event updated" })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
  
  export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await Event.delete({ id: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "Event not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
