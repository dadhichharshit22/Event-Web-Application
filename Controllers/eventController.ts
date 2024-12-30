import { Request, Response } from 'express';
import Event from '../models/eventModal';
import { AuthRequest } from '../middlewares/auth';

export const createEvent = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const event = new Event({
      eventName: req.body.eventName,
      description: req.body.description,
      date: req.body.date,
      domain:req.body.domain,
      location:req.body.location,
      capacity:req.body.capacity,
      image:req.body.image,
      registeredUsers: req.body.registeredUsers,
      organizerId: req.user.userId
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