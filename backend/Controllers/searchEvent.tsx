import { Request, Response, NextFunction } from 'express';
import Event from '../models/eventModal';

const getEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const events = await Event.find();

        res.status(200).json({
            status: 'success',
            data: events
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

const getEventsByUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;
    try {
        // if rating is 0 then it will be excluded 
        const events = await Event.find({ username, rating: { $ne: 0 } });

        res.status(200).json({
            status: 'success',
            data: events
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};


const get = {
    getEvents,
    getEventsByUser
}

export default get;