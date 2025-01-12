import { Request, Response } from 'express';
import Event from '../models/eventModal';
import { AuthRequest } from '../middlewares/authMiddleware';



export const createEvent = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { eventName, description, date, domain, location, capacity, image, registeredUsers } = req.body;

    if (!eventName || !description || !date || !domain || !location || !capacity) {
      res.status(400).json({ error: 'All fields are required' });
    }

    const event = new Event({
      eventName,
      description,
      date,
      domain,
      location,
      capacity,
      image,
      registeredUsers
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};



export const getAllEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const events = await Event.find().populate('organizerId', 'name email');
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getEventById = async (req: Request, res: Response): Promise<void> => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('organizerId', 'name email')
      .populate('registeredUsers', 'name email');
      
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
      return;
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateEvent = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const event = await Event.findOne({
      _id: req.params.id,
      organizerId: req.user.userId
    });

    if (!event) {
      res.status(404).json({ error: 'Event not found' });
      return;
    }

    Object.assign(event, req.body);
    await event.save();
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteEvent = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id,
      organizerId: req.user.userId
    });

    if (!event) {
      res.status(404).json({ error: 'Event not found' });
      return;
    }

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};