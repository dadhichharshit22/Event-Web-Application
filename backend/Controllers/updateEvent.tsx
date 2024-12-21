import { Request, Response, NextFunction } from 'express';
import Event from '../models/eventModal';

const updateEvent = async (req: Request, res: Response, next: NextFunction) => {
    const { eventId } = req.params;
    const { username, eventName, eventLink, imgLink, location, date } = req.body;

    if (!eventId) {
        return res.status(400).json({
            status: 'fail',
            message: 'Event ID is required',
        });
    }

    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            { username, eventName, eventLink, imgLink, location, date },
            { new: true, runValidators: true } // Return the updated document
        );

        if (!updatedEvent) {
            return res.status(404).json({
                status: 'fail',
                message: 'Event not found',
            });
        }

        res.status(200).json({
            status: 'Update Success',
            data: updatedEvent,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: 'An error occurred while updating the event',
        });
    }
};

export default updateEvent;
