import Event from '../models/eventModal';

const deleteExpiredEvents = async () => {
    try {
        const now = new Date();
        const result = await Event.deleteMany({ date: { $lt: now } });
        console.log(`${result.deletedCount} expired events deleted.`);
    } catch (err) {
        console.error('Error deleting expired events:', err);
    }
};

export default deleteExpiredEvents;

