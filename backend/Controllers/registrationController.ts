import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import Registration from '../models/registration';
import Event from '../models/eventModal';

export const registerForEvent = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
      return;
    }

    const existingRegistration = await Registration.findOne({
      userId: req.user.userId,
      eventId: req.params.eventId
    });

    if (existingRegistration) {
      res.status(400).json({ error: 'Already registered for this event' });
      return;
    }

    const registration = new Registration({
      userId: req.user.userId,
      eventId: req.params.eventId,
      status: event.registeredUsers.length < event.capacity ? 'confirmed' : 'waitlist'
    });

    await registration.save();

    if (registration.status === 'confirmed') {
      event.registeredUsers.push(req.user.userId);
      await event.save();
    }

    res.status(201).json(registration);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const cancelRegistration = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const registration = await Registration.findOne({
      userId: req.user.userId,
      eventId: req.params.eventId
    });

    if (!registration) {
      res.status(404).json({ error: 'Registration not found' });
      return;
    }

    registration.status = 'cancelled';
    await registration.save();

    const event = await Event.findById(req.params.eventId);
    if (event) {
      event.registeredUsers = event.registeredUsers.filter(
        userId => userId.toString() !== req.user.userId
      );
      await event.save();
    }

    res.json({ message: 'Registration cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};