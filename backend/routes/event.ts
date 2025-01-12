import express from 'express';
import { auth } from '../middlewares/auth';
import * as eventController from '../Controllers/eventController';

const router = express.Router();

router.post('/', auth, eventController.createEvent);
router.get('/',auth, eventController.getAllEvents);
router.get('/:id',auth, eventController.getEventById);
router.put('/:id', auth, eventController.updateEvent);
router.delete('/:id', auth, eventController.deleteEvent);

export default router;